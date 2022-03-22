import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const CategoryCard = styled.View`
  width: 235px;
  border-radius: 12px;
  margin-right: 38px;
  height: 305px;
  border: 1px solid #c6c6c6;
`;
export const CardImage = styled.Image`
  margin-bottom: 15px;
  width: 235px;
  height: 103px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
export const CardImagePlaceholder = styled.View`
  width: 235px;
  height: 103px;
  background: #222;
  margin-bottom: 15px;
`;
export const CardTitle = styled.Text`
  color: #2ab598;
  font-size: 17px;
  padding: 0 10px;
  margin-bottom: -20px;
  font-family: ${theme.fonts.title700};
`;
export const CardDescription = styled.Text`
  color: #868686;
  margin-bottom: 15px;
  padding: 0 10px;
`;
export const CardButton = styled.TouchableOpacity`
  padding: 0 10px;
`;
export const ButtonSeeMore = styled.Text`
  color: #fda506;
  font-size: 16px;
  font-family: ${theme.fonts.title700};
`;
