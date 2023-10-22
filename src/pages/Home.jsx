import Footer from "../components/footer/Footer";
import Hero from "../components/header/Hero";
import Newsletter from "../components/newsletter/Newsletter";
import PopularArticle from "../components/popularArticle/PopularArticle";

function Home() {
  return (
    <>
      <Hero />
      <PopularArticle />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
