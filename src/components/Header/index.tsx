import React from "react";

import Logo from "../../assets/logo-2.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export type HeaderProps = {
	iconVisible: boolean
}

export default function Header({iconVisible}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Logo>
        {iconVisible ?
          <S.IconView
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </S.IconView>
        : <></>}

        <S.ImageLogo source={Logo} />
      </S.Logo>
      <S.Menu>
        <Ionicons name="ios-menu" size={32} color="#FFF" />
      </S.Menu>
    </S.Container>
  );
}
