import React from "react";
import styled, { css } from "styled-components";

//styled-components util function
const sizes = {
  desktop: 1024,
  tablet: 768,
};

//make media query function according to the size object
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
});

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: auto;
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
  ${media.desktop`width:768px;`}
  ${media.tablet`width:100%;`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

function StyledComponent() {
  return (
    <Box color="black">
      <Button>Hello</Button>
      <Button inverted={true}>border only</Button>
    </Box>
  );
}

export default StyledComponent;
