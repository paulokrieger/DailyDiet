import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const InputContainer = styled(TextInputMask)`
  height: 48px;
  width: 45%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 5px;
  padding-left: 12px;
  margin-bottom: 12px;
`;
