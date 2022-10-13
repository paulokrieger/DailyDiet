import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
  TextInputMask,
} from "react-native-masked-text";

import { Text, TextInputProps } from "react-native";

import { InputContainer } from "./styles";

type Props = TextInputProps &
  TextInputMaskOptionProp & {
    type: TextInputMaskTypeProp;
    options?: TextInputMaskOptionProp;
  };

export function MaskedInput({ type, options, ...rest }: Props) {
  return (
    <InputContainer type={type} options={options} {...rest}></InputContainer>
  );
}
