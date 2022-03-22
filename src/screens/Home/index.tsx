import React from "react";

import * as S from "./styles";

import Header from "../../components/Header";

import { Picker } from "@react-native-picker/picker";
import Footer from "../../components/Footer";
import CategoryList from "../../components/CategoryList";
import CardList from "../../components/CardList";
import axios from "axios";
import { FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import getCategories from "../../services/categories";
import getPosts from "../../services/posts";

export default function Home() {
	const [categories, setCategories] = React.useState([]);
	const [posts, setPosts] = React.useState([]);
	const [data, setData] = React.useState([])
	const [selectedLanguage, setSelectedLanguage] = React.useState();

	const navigation = useNavigation();
	function handleSinglePost(postID: any) {
		api
			.get(`/posts/${postID}`)
			.then((response) => {
				navigation.navigate("SinglePost", response.data);
			})
			.catch(function () { });
	}

	React.useEffect(() => {
		const requestCategories = async () => {
			const response = await getCategories();
			if (!response) {
				alert("No categories found!");
				return;
			}

			setCategories(response);
		};

		const requestPosts = async () => {
			const response = await getPosts();
			if (!response) {
				alert("No found posts!");
				return;
			}

			setPosts(response);
		};

		requestPosts();
		requestCategories();
	}, []);

	React.useEffect(() => {
		async function mergeMedia() {
			const list = [];
			for await (const post of posts) {
				const mergeMedia = await api.get(`/media/${post.featured_media}`);

				list.push({ ...post, imgURL: mergeMedia.data.source_url });
			}

			setData(list);
		}

		mergeMedia();
	}, [posts.length]);

	return (
		<S.Container>
			<Header iconVisible={false} />
			<S.Wrapper>
				<S.Content>
					<S.Search>
						<S.Text>Ordernar por:</S.Text>
						<Picker
							style={{ width: 100, borderWidth: 1, borderColor: "red" }}
							selectedValue={selectedLanguage}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedLanguage(itemValue)
							}
						>
							<Picker.Item label="A-Z" value="a-z" />
							<Picker.Item label="Z-A" value="z-a" />
							<Picker.Item label="Mais visualizados" value="more-views" />
							<Picker.Item label="Mais recentes" value="recents" />
						</Picker>
					</S.Search>
					{data.length > 0 && (
						<CategoryList
							title={"Curso online"}
							seeMore={"Ver mais"}
							children={
								<FlatList
									style={{ marginBottom: 43 }}
									showsVerticalScrollIndicator={false}
									data={data}
									keyExtractor={(item) => item.id}
									horizontal
									renderItem={({ item, index }) => {
										return (
											<CardList
												key={item.id}
												image={item.imgURL}
												name={`${item.title.rendered.substring(0, 45)}...`}
												description={`${item.excerpt.rendered.substring(
													0,
													99
												)}...`}
												handleSeeMore={() => handleSinglePost(item.id)}
											/>
										);
									}}
								></FlatList>
							}
						/>
					)}
				</S.Content>
				<Footer />
			</S.Wrapper>
		</S.Container>
	);
}
