import React from "react";
import HomepageTitle from "@/components/ui/home/HomepageTitle";
import Carousel from "@/components/ui/home/Carousel";
import PopularArticles from "@/components/ui/home/PopularArticles";
import NpruAarticles from "@/components/ui/home/NpruAarticles";
import NewArticles from "@/components/ui/home/NewArticles";
import PopularTags from "@/components/ui/home/PopularTags";
const HomePage = () => {
  return (
    <div>
      <HomepageTitle />
      <Carousel />
      <PopularArticles />
      <NpruAarticles />
      <NewArticles />
      <PopularTags />
    </div>
  );
};

export default HomePage;
