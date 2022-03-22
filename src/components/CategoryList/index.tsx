import React, { ReactNode } from "react";

import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "./../../assets/logo-2.png";
import axios from "axios";

export type CardProps = {
  title: string;
  seeMore: string;
  children: ReactNode;
};

export default function CategoryList({
  title,
  seeMore,
  children
}: CardProps) {
  return (
    <S.Category>
      <S.CategoryHeader>
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategorySeeMore>
          {seeMore}
          <MaterialIcons name="play-arrow" size={16} color="black" />
        </S.CategorySeeMore>
      </S.CategoryHeader>
      <S.CategoryContent>
        {children}
      </S.CategoryContent>
    </S.Category>
  );
}
