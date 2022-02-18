/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <SizedProgressBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <Bar value={value}></Bar>
    </SizedProgressBar>
  );
};

const SizedProgressBar = styled.div`
  height: ${(p) => handleSize(p.size)};
  padding: ${(p) =>
    handleSize(p.size) === ProgressBarSizes.LARGE ? "4px" : null};
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  width: 370px;
  height: ${(p) => handleSize(p.size)};
  overflow: hidden;
`;

function handleSize(size) {
  if (size in ProgressBarSizes) return size;
  if (size === "small") return ProgressBarSizes.SMALL;
  if (size === "medium") return ProgressBarSizes.MEDIUM;
  if (size === "large") return ProgressBarSizes.LARGE;
  return size;
}

const Bar = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  clip-path: inset(0px 0px 0px 0px round 4px);
  :before {
    content: "";
    display: block;
    width: ${(p) => `${p.value}%`};
    height: 100%;
    background: ${COLORS.primary};
  }
`;

export const ProgressBarSizes = {
  LARGE: "24px",
  MEDIUM: "12px",
  SMALL: "8px",
};

export default ProgressBar;
