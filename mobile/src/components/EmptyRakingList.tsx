import { Text } from 'native-base';

export function EmptyRakingList() {
  return (
    <Text color="white" fontSize="sm" textAlign="center">
      The ranking of this pool has not yet been {'\n'}
      formed, wait for the results.
    </Text>
  );
}