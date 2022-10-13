import styled, { css } from "styled-components/native";

interface Props {
  type: "primary" | "secondary";
}

export const Container = styled.TouchableOpacity<Props>`
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-radius: 6px;
  border: 1px solid ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY_2  : theme.COLORS.GRAY_2};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 6px;
  flex: 1;
`;

export const Text = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_1} 
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
