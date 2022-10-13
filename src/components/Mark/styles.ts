import styled, { css } from "styled-components/native";

interface ColorMarkProps {
  onDiet: boolean;
}

export const Container = styled.View`
  width: 144px;
  height: 34px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ColorMark = styled.View<ColorMarkProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
