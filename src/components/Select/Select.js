import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {/* <label>{label}</label> */}
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <CustomVisibleArea>
        {displayedValue}
        <StyledIcon id="chevron-down" size={24} strokeWidth={3}></StyledIcon>
      </CustomVisibleArea>
    </Wrapper>
  );
};

// reference: https://codepen.io/hchiam/pen/OJOwrdX?editors=1100

const Wrapper = styled.div`
  position: relative; // so the absolute child stays inside
  width: fit-content;
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomVisibleArea = styled.div`
  pointer-events: none; // so the caret doesn't block clicking/hovering the true select underneath
  background: #d3d3d3;
  color: #505050;
  border-radius: 10px;

  padding: 10px 70px 10px 20px;

  ${StyledSelect}:focus + & {
    outline: 3px dotted #33a3ff;
    outline: 3px auto Highlight;
    outline: 3px auto -webkit-focus-ring-color;
    outline-offset: 3px;
  }

  ${StyledSelect}:focus + &,
  ${StyledSelect}:hover + & {
    background: #c0c0c0;
    color: ${COLORS.black};
  }

  /* &:after {
    content: "▼";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 10px;
    border-radius: 0 3px 3px 0;
    background: blue;
    color: white;

    ${StyledSelect}:focus + &,
    ${StyledSelect}:hover + & {
      color: grey;
    }
  } */
`;

const StyledIcon = styled(Icon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 17px;
  margin: auto;
  border-radius: 0 3px 3px 0;
  /* background: blue; */
  /* color: white; */

  ${StyledSelect}:focus + ${CustomVisibleArea} &,
  ${StyledSelect}:hover + ${CustomVisibleArea} & {
    color: ${COLORS.black};
  }
`;

export default Select;
