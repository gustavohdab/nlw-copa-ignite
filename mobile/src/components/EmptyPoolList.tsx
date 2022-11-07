import { Row, Text, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export function EmptyPoolList() {
  const { navigate } = useNavigation();

  return (
    <Row flexWrap="wrap" justifyContent="center">
      <Text color="white" fontSize="sm" textAlign="center">
        You are not participating in any pool yet, how about
      </Text>

      <Pressable onPress={() => navigate('find')}>
          <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
            search one by code
          </Text>
      </Pressable>

      <Text color="white" fontSize="sm" textAlign="center" mx={1}>
        ou
      </Text>

      <Pressable onPress={() => navigate('new')}>
        <Text textDecorationLine="underline"  color="yellow.500">
          create a new
        </Text>
      </Pressable>

      <Text color="white" fontSize="sm" textAlign="center">
        ?
      </Text>
    </Row>
  );
}