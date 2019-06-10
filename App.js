import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

import TodoList from "./src/components/templates/todo-list";

const Container = styled.View`
  flex: 1;
  background-color: #071013;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
};

export default App;
