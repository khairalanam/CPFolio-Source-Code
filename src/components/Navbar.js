import { HStack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logopng.png";
import github from "../images/githubpng.png";
import { Link } from "react-router-dom";
import replit from "../images/replit.png";

const Navbar = () => {
  return (
    <Flex
      className="nav-flex"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Flex gap={"0.5em"} alignItems="center">
        <img src={logo} alt="Logo" className="logo-img" />
        <Text fontSize={"1.25rem"} fontWeight="bold">
          CPFolio
        </Text>
      </Flex>
      <HStack className="nav-list" gap="2em">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contests">Contests</Link>
        </li>
        <li>
          <Link to="/credits">Credits</Link>
        </li>
      </HStack>
      <Flex gap={"1em"}>
        <a href="https://github.com/khairalanam/CPFolio" target="blank">
          <img src={github} alt="Github" className="github-logo" />
        </a>
        <a
          href="https://replit.com/@khairalanam/CPFolio-Platform?v=1"
          target="blank"
        >
          <img src={replit} alt="Replit" className="github-logo" />
        </a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
