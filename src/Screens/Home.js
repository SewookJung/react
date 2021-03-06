import React from "react";
import styled from "styled-components";

function homeContent() {
  return <Box>Home</Box>;
}

const Box = styled.div`
  padding: 20px 10px;
  background: #3498db;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100px;
  text-transform: uppercase;
`;

export default homeContent;
