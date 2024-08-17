import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import FavouriteArticles from "../components/favouriteArticles/favouriteArticles";

function Blog() {
  const head = "Blog";
  const desc = "Bringing you the best of today's writing";

  return (
    <>
      <Header head={head} desc={desc} />
      <FavouriteArticles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Blog;
