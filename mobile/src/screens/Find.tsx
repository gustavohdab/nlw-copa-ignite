import { Heading, useToast, VStack } from "native-base";
import { useState } from "react"
import { useNavigation } from "@react-navigation/native";

import { api } from "../services/api";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Find(){
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('')

    const toast = useToast()
    const { navigate } = useNavigation()

    async function handleJoinPool(){
        try {
            setIsLoading(true)

            if(!code.trim()){
                return toast.show({
                    title: "Inform the code.",
                    placement: "top",
                    bgColor: "red.500"
                })
            }

            await api.post('/pools/join', {code})
            toast.show({
                title: "You joined the pool successfully",
                placement: "top",
                bgColor: "green.500"
            })
            navigate('pools')

        } catch (error) {
            console.log(error)
            setIsLoading(false)

            if (error.response?.data?.message == "Pool not found.")

            return toast.show({
                title: "Pool not found.",
                placement: "top",
                bgColor: "red.500"
            })

            if (error.response?.data?.message == "You already joined this pool.")

            return toast.show({
                title: "You already joined this pool.",
                placement: "top",
                bgColor: "red.500"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Search by code" showBackButton/>

            <VStack mt={8} mx={5} alignItems="center">

            <Heading fontFamily={"heading"} color="white" fontSize={"xl"} mb={8} textAlign="center">
                Find a pool using your unique code
            </Heading>

            <Input
                mb={2}
                placeholder="Enter the pool code"
                autoCapitalize="characters"
                onChangeText={setCode}
            />

            <Button 
                title="SEARCH POOL"
                isLoading={isLoading}
                onPress={handleJoinPool}
            />
            </VStack>
        </VStack>
    )
}