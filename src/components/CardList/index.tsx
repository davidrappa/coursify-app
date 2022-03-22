import React from "react";

import * as S from "./styles";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

export type CardProps = {
	image: string;
	name: string;
	description: string;
	handleSeeMore(): void;
};

export default function CardList({
	image,
	name,
	description,
	handleSeeMore,
}: CardProps) {
	const { width } = useWindowDimensions();

	const source = {
		html: `
			<p>
				${description}
			</p>`,
	};

	const tagsStyles = {
		body: {
			whiteSpace: "normal",
			color: "gray",
			width: "220px",
			padding: "0 10px",
			height: "78px",
			marginBottom: "35px",
		},
	};
	return (
		<S.CategoryCard>
			<S.CardImage source={{ uri: image }} />
			<S.CardTitle>{name}</S.CardTitle>
			<RenderHTML
				contentWidth={width}
				source={source}
				tagsStyles={tagsStyles}
			></RenderHTML>
			<S.CardButton onPress={handleSeeMore}>
				<S.ButtonSeeMore>Leia mais</S.ButtonSeeMore>
			</S.CardButton>
		</S.CategoryCard>
	);
}
