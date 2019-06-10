import React from "react";

import styled from "styled-components";

const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight}px;` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
  ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
`;

export default Title;
