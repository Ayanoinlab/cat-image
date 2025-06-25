import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image"; // 追加
import React from "react";
 
export default async function Home() {
  //           ^^^^^(1) asyncキーワードを追加
  // (2) ビルド時にfetchImageの結果が固定されないようにする

  // (3) APIから画像を取得
  const image = await fetchImage();
  // (4) 画像URLをコンソールに表示
  return  <CatImage url={image.url} />;
}