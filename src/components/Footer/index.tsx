import React from "react";
import * as S from "./styles";
import Logo from "../../assets/logo-coursify-w.png";
import { Linking } from "react-native";

export default function Footer() {
  const url = "https://coursify.me/";
  return (
    <S.Container>
      <S.ImageLogo source={Logo} />
      <S.Text>
        O Coursify.me é uma plataforma de ensino a distância, onde qualquer
        pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
      </S.Text>
      <S.Button onPress={() => Linking.openURL(url)}>
        <S.ButtonText>Quero conhecer a plataforma!</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
