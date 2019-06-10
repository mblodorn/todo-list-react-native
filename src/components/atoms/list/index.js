import React from "react";

import styled from "styled-components";

const List = styled.ScrollView`
  padding: 16px 0px 16px 0px;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  ${props =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : ""};
`;

export default List;
