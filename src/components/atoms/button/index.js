import React from "react";

import styled from "styled-components";

const Container = styled.TouchableOpacity`
  width: 192px;
  padding: 8px 8px 8px 8px;
  border-radius: 32px;
  border: solid 2px white;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight}px;` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
`;

const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

const Button = props => {
  return (
    <Container {...props}>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default Button;
