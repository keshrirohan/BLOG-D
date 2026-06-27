import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedPost from "./components/FeaturedPost";
import Categories from "./components/Categories";
import TrendingPosts from "./components/TrendingPosts";
import LatestPosts from "./components/LatestPosts";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedPost />
      <Categories />
      <TrendingPosts />
      <LatestPosts />
      <Newsletter />
      <Footer />
    </>
  );
}
