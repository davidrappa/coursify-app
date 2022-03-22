import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: #3cc6aa;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 30px;
  padding-bottom: 30px;
  flex: auto;
`;

export const ImageLogo = styled.Image`
  margin-bottom: 20px;
`;
export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
  margin-bottom: 25px;
`;
export const Button = styled.TouchableOpacity`
  background: #fda506;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 340px;
  border-radius: 50px;
  width: 100%;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
`;
