import styled, { css } from "styled-components/native";

type TextInputProps = {
  size?: "small" | "medium" | "large";
};

export const TextInput = styled.TextInput<TextInputProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 5px;
  padding-left: 12px;
  margin-bottom: 12px;

  ${({ size }) =>
    size === "small" &&
    css`
      width: 60px;
      height: 60px;
      text-align: center;
      padding: 0;
    `};

  ${({ size }) =>
    size === "medium" &&
    css`
      flex: 1;
    `};

  ${({ size }) =>
    size === "large" &&
    css`
      width: 100%;
    `};
`;
