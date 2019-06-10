import React from "react";

import styled from "styled-components";

const Card = styled.TouchableOpacity`
  background-color: #56666b;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : ""};
`;

export default Card;
