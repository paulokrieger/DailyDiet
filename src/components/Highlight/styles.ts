import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export interface HighLightProps {
  dietOk: boolean;
}

export const Container = styled.View<HighLightProps>`
  width: 100%;

  background-color: ${({ theme, dietOk }) =>
    dietOk ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: center;
  height: 102px;
  margin-top: 22px;
`;

export const HandleButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const GoIcon = styled(ArrowUpRight).attrs<HighLightProps>(
  ({ theme, dietOk }) => ({
    size: 24,
    color: dietOk ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
  `};
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
