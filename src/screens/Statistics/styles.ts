import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

export interface onDietProps {
  onDiet: boolean;
}

export const Container = styled(SafeAreaView)<onDietProps>`
  flex: 1;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px 0 0;
  position: relative;
`;

export const HandleBackButton = styled.TouchableOpacity`
  padding: 0px 18px;
`;

export const BackIcon = styled(ArrowLeft).attrs<onDietProps>(
  ({ theme, onDiet }) => ({
    size: 24,
    color: onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const StatusContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
  `};
`;
export const StatusText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const StatisticsContainer = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  padding-top: 30px;
  margin-top: 36px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const StatisticsHighLightsWithDietContainer = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
