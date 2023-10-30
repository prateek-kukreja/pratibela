import Footer from "../components/footer/Footer";
import Hero from "../components/header/Hero";
import Newsletter from "../components/newsletter/Newsletter";
import FavouriteArticles from "../components/favouriteArticles/favouriteArticles";

function Home() {
  return (
    <>
      <Hero />
      <FavouriteArticles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
