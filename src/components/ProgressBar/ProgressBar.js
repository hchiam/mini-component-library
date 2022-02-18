/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

export const ProgressBarSizes = {
  LARGE: "24px",
  MEDIUM: "12px",
  SMALL: "8px",
};

const STYLES = {
  [ProgressBarSizes.LARGE]: {
    height: "24px",
    padding: "4px",
  },
  [ProgressBarSizes.MEDIUM]: {
    height: "12px",
    padding: 0,
  },
  [ProgressBarSizes.SMALL]: {
    height: "8px",
    padding: 0,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[handleSize(size)];
  if (!styles) throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  return (
    <SizedProgressBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
      style={{
        "--height": styles.height,
        "--padding": styles.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{ "--width": value + "%" }}></Bar>
    </SizedProgressBar>
  );
};

const SizedProgressBar = styled.div`
  height: var(--height);
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  width: 370px;
  height: ${(p) => handleSize(p.size)};
  overflow: hidden; /* to trim end corners when near end of progress bar */
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
    width: var(--width); /* for better perf, make this a CSS variable */
    height: 100%;
    background: ${COLORS.primary};
  }
`;

export default ProgressBar;
