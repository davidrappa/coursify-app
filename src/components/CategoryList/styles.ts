import styled from "styled-components/native";
import { theme } from "../../global/theme";
export const Category = styled.View``;

export const CategoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const CategoryTitle = styled.Text`
	font-size: 22px;
	text-transform: uppercase;
	color: #2ab598;
	font-family: ${theme.fonts.title700};
`;

export const CategorySeeMore = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 17px;
  text-transform: uppercase;
  font-family: ${theme.fonts.title400};
`;
export const CategoryContent = styled.SafeAreaView``
