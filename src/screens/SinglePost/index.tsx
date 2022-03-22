import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import * as S from "./styles";
import RenderHTML from "react-native-render-html";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SinglePost({ route }) {
	const post = route.params;

	const { width } = useWindowDimensions();

	const source = {
		html: `
			<p>
				${post.content.rendered}
			</p>`,
	};

	const tagsStyles = {
		body: {
			whiteSpace: "normal",
			color: "gray",
			width: "100%",
		},
	};
	return (
		<S.Container>
			<Header iconVisible={true} />
			<S.Content showsHorizontalScrollIndicator={false}>
				<S.Wrapper showsHorizontalScrollIndicator={false}>
					<S.Title>{post.title.rendered}</S.Title>
					<RenderHTML
						contentWidth={width}
						source={source}
						tagsStyles={tagsStyles}
					></RenderHTML>
				</S.Wrapper>
				<Footer />
			</S.Content>
		</S.Container>
	);
}
