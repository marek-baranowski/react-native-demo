import React, { useState } from "react";
import { Box, Button, Heading, HStack } from "native-base";
import NewPostForm from "./components/NewPostForm";
import ListView from "./components/ListView";

function App() {
  const [currentView, setCurrentView] = useState("post");

  return (
    <Box safeArea flex={1} p={2} mx="auto" w="500">
      <Heading mb="5" textAlign="center">
        React Native demo
      </Heading>
      <Box mb="7">
        <HStack space="4">
          {[
            { key: "post", text: "Send post" },
            { key: "list", text: "View list" },
          ].map(({ key, text }) => (
            <Button
              key={key}
              onPress={() => setCurrentView(key)}
              variant={currentView === key ? "solid" : "outline"}
            >
              {text}
            </Button>
          ))}
        </HStack>
      </Box>
      {currentView === "post" ? <NewPostForm /> : <ListView />}
    </Box>
  );
}

export default App;
