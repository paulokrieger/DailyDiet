import styled, { css } from "styled-components/native";

import { Plus } from "phosphor-react-native";

export const Container = styled.View`
  margin-top: 30px;
`;

export const AboveTitleText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const ButtonContainer = styled.TouchableOpacity`
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.WHITE,
}))``;

export const ButtonName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding-left: 5px;
`;
