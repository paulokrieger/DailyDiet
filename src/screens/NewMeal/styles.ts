import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding: 24px 0 0;
  position: relative;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 },
})`
  width: 100%;
`;

export const HeaderRow = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const HandleBackButton = styled.TouchableOpacity`
  margin: 0px 18px;
`;

export const BackIcon = styled(ArrowLeft)`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 4px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  margin-top: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Footer = styled.View`
margin-top: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
