import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 26px;
  margin-top: 20px;
  margin: 4px;
`;

export const Quantity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
  `};
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding-top: 5px;
`;
