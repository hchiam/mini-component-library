import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SizeInfo = {
  // or create styled(baseComponent) to create variants
  small: {
    inputFontSize: "small",
    iconSize: "1em",
  },
  large: {
    inputFontSize: "large",
    iconSize: "1.5em",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SizeInfo[size];
  return (
    <Wrapper style={{ "--width": width + "px" }}>
      <VisuallyHidden id={"_" + label}>
        <Label style={{ "--font-size": styles.inputFontSize }}>{label}</Label>
      </VisuallyHidden>
      <InputWrapper>
        <Input
          for={"_" + label}
          placeholder={placeholder}
          style={{ "--font-size": styles.inputFontSize }}
        ></Input>
        <PositionedIcon
          id={icon}
          size={styles.iconSize}
          strokeWidth={2}
          tabindex="-1"
        ></PositionedIcon>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
`;

const Label = styled.label`
  font-weight: 700;
  min-width: 12ch;
  margin-right: 10px;
  vertical-align: baseline;
  line-height: 1.75;
  font-size: var(--font-size);
`;

const InputWrapper = styled.div`
  position: relative; // to keep icon within
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 1.75em;
  outline-offset: 3px;
  vertical-align: baseline;
  line-height: 1.75;
  width: var(--width);
  font-size: var(--font-size);

  &:placeholder {
    font-weight: 400;
    color: ${COLORS.gray300};
  }
  &:not(:placeholder-shown) {
    font-weight: 600;
    color: ${COLORS.gray700};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  bottom: 10px;
  margin: auto;
  pointer-events: none;
  ${Input}:placeholder-shown + & {
    color: ${COLORS.gray300};
  }
  ${Input}:not(:placeholder-shown) + & {
    color: ${COLORS.gray700};
  }
`;

export default IconInput;
