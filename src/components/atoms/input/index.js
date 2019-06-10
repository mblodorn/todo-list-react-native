import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  padding: 0px 16px 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight}px;` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
`;

const TextInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  width: 100%;
  height: 48px;
`;
const Input = ({
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
  ref,
  ...props
}) => {
  return (
    <Container {...props}>
      <TextInput
        ref={ref}
        underlineColorAndroid="transparent"
        underlineColor="transparent"
        placeholderTextColor="#56666b"
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};

export default Input;
