import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type ResultProps = {
  type: "onDiet" | "offDiet";
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 36px;
`;

export const Title = styled.Text<ResultProps>`
  ${({ theme, type }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_7};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
    

    ${type === "offDiet" &&
    css`
      color: ${theme.COLORS.RED_DARK};
    `}
    ${type === "onDiet" &&
    css`
      color: ${theme.COLORS.GREEN_DARK};
    `}
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    margin-top: 8px;
  `};
`;

export const Image = styled.Image`
 margin-bottom: 32px;
  margin-top: 32px;
`;
