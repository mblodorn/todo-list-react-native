import React from "react";

import styled from "styled-components";

const List = styled.ScrollView`
width: 100%;
  padding: 16px 32px 16px 32px;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : ""};
`;

export default List;
