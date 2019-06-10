import React, { useState } from "react";
import styled from "styled-components";

import Title from "../../atoms/title";
import Text from "../../atoms/text";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Card from "../../atoms/card";
import List from "../../atoms/list";

const Container = styled.View`
  flex: 1;
  padding: 64px 16px 16px 16px;
  width: 100%;
`;

const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const onAdd = () => {
    if (!todoText) return;
    setTodoItems([...todoItems, todoText]);
    setTodoText("");
  };

  const removeItem = index => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <Container>
      <Title textAlign="center" alignSelf="center" marginBottom={64}>
        Todo List
      </Title>

      <Input
        value={todoText}
        onChangeText={setTodoText}
        alignSelf="center"
        placeholder="What do you need to do?"
      />
      <Button marginTop={16} alignSelf="center" onPress={onAdd}>
        Add
      </Button>

      <List marginTop={16}>
        {todoItems.map((todoItem, index) => {
          return (
            <Card
              key={index}
              marginBottom={16}
              onLongPress={() => removeItem(index)}
            >
              <Text>{todoItem}</Text>
            </Card>
          );
        })}
      </List>
    </Container>
  );
};
export default TodoList;
