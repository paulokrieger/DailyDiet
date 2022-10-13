import styled, { css } from "styled-components/native";

export interface ButtonSelectProps {
  isActive: boolean;
  type: "onDiet" | "offDiet";
}

export const Container = styled.TouchableOpacity<ButtonSelectProps>`
  width: 160px;
  height: 50px;

  ${({ theme, isActive, type }) =>
    type === "onDiet" &&
    css`
      background-color: ${isActive
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.GRAY_6};
      border: 1px solid ${isActive ? theme.COLORS.GREEN_DARK: theme.COLORS.GRAY_7};
    `};

  ${({ theme, isActive, type }) =>
    type === "offDiet" &&
    css`
      background-color: ${isActive
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_6};
      border: 1px solid ${isActive ? theme.COLORS.RED_DARK: theme.COLORS.GRAY_7};
    `};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding-left: 8px;
`;

export const LittleBall = styled.View<ButtonSelectProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === "onDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
