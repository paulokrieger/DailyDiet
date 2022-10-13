import styled, { css } from "styled-components/native";

export interface FoodCardTypeProps {
  onDiet: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 49px;
  min-height: 49px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;
  margin-top: 8px;
`;

export const TimeAndFoodContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
  padding: 0px 10px;
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_4};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Food = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding: 0px 10px;
`;

export const Mark = styled.View<FoodCardTypeProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 999px;
  margin: 0px 10px;
`;
