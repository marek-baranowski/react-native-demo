import React from "react";
import {
  Button,
  Text,
  HStack,
  Box,
  Image,
  Center,
  Spinner,
  Heading,
} from "native-base";
import { FlatList } from "react-native-web";
import { useAsync } from "../common/hooks";
import { fetchList } from "../common/api";

function ListView() {
  const { execute, status, value } = useAsync(fetchList);

  if (status === "pending") {
    return (
      <Box flex={1}>
        <Center>
          <Spinner />
        </Center>
      </Box>
    );
  }

  if (status === "error") {
    return (
      <Box flex={1}>
        <Center>
          <Heading size="sm" mb="4">Unexpected error occurred.</Heading>
          <Button onPress={execute}>Try again</Button>
        </Center>
      </Box>
    );
  }

  return (
    <FlatList
      data={value}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          borderColor="muted.800"
          pl={["0", "4"]}
          pr={["0", "5"]}
          py="2"
        >
          <HStack space="5">
            <Image
              size="48px"
              alt={`Image for ${item.title}`}
              source={{
                uri: item.thumbnailUrl,
              }}
            />
            <Box flex={1}>
              <Text bold wo>
                {item.title}
              </Text>
            </Box>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListView;
