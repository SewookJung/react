import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Box>
      <Title>React</Title>
      <List>
        <ListItems>
          <Link to="/">Home</Link>
        </ListItems>
        <ListItems>
          <Link to="/about">About</Link>
        </ListItems>
        <ListItems>
          <Link to="/contact">Contact</Link>
        </ListItems>
      </List>
    </Box>
  );
}

const Box = styled.div`
  padding: 20px 10px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #9b59b6;
  margin-bottom: 20px;
  font-weight: 700;
`;

const List = styled.ul`
  display: flex;
`;

const ListItems = styled.li`
  margin-right: 10px;
  font-weight: 600;
  font-size: 20px;
`;

export default Header;
