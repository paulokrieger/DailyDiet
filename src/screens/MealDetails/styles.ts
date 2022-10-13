import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface HeaderColorProps {
  onDiet: boolean;
}

export const Container = styled(SafeAreaView)<HeaderColorProps>`
  flex: 1;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const LabelBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 4px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 4px;
  `}
`;

export const LabelTimeAndHourTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-top: 24px;
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
  margin-top: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: "rgba(0,0,0,0.5)";
`;

export const ModalStyle = styled.View`
  width: 327px;
  height: 192px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  padding: 24px;
`;

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  align-items: center;
  justify-content: center;
  width: 100%;
`;