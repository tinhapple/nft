import React from "react";
import Introduce from "./components/introduce";
import Trending from "./components/trending";
import Creators from "./components/creators";
import Category from "./components/category";
import Discover from "./components/discover";
import Words from "./components/words";
import Subscribe from "../../components/subscribe";
import Magic from "./components/magic";


export default function Home() {

  return (
    <body >
      <Introduce/>
      <Trending/>
      <Creators/>
      <Category/>
      <Discover/>
      <Magic/>
      <Words/>
      <Subscribe/>
    </body>
  );
}
