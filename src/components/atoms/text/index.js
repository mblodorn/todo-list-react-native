import React from "react";

import styled from "styled-components";

const Text = styled.Text`
  font-size: 20px;
  color: white;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight}px;` : "")}
  display: flex;
`;

export default Text;
