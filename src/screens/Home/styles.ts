import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;
export const Content = styled.ScrollView`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 21px;
`;
export const Wrapper = styled.ScrollView``
export const Search = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;
export const Text = styled.Text`
  font-size: 17px;
  color: #535353;
  font-family: ${theme.fonts.title300};
  text-transform: uppercase;
`;
