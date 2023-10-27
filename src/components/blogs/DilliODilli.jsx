import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";
import Img1 from "../../images/blog/dilli/dilli-o-dilli.png";
import Img2 from "../../images/blog/dilli/lotus-temple.png";
import Img3 from "../../images/blog/dilli/dilli-bazar.png";
import Img4 from "../../images/blog/dilli/dilli-metro.png";
import Img5 from "../../images/blog/dilli/book-market.png";
import Img6 from "../../images/blog/dilli/moksh-street.png";
import Img7 from "../../images/blog/dilli/dilli-haat.png";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="blogcontent-heading">
          <h1>Dilli-O-Dilli</h1>
          <div className="blogcontent-heading-divider"></div>
          <div className="blogcontent-heading-byline">
            <div className="blogcontent-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="blogcontent-heading-byline__text">
              <p>naman rakheja</p>
              <p className="blogcontent-heading-byline__date">
                <time dateTime="2021-12-31">PUBLISHED ON 25 NOVEMBER 2020</time>
                <span className="bull">•</span> 10 min read
              </p>
            </div>
          </div>
        </div>
        <div className="blogcontent-big-image">
          <img src={Img1} alt="" />
        </div>
        <div className="container">
          <div className="blogcontent-text">
            <p>“Dilli sheher ki baat hi kuch aur hai!”</p>
            <p>
              Delhi has always been portrayed very beautifully in cinema and
              books. A lot of books are solely dedicated to describing the
              cultural and historical significance, people’s movements, bonds,
              climate and weather, places to visit and whatnot. Artists have
              always connected with the city in the most intimate sense. They
              love Delhi like no other. As the matter of fact, many people love
              this city, but the ones who acknowledge its existence with every
              breath are being loved back. They are lucky indeed. It’s hard to
              resist its admiration. Hence, there are infinite reasons to love
              this city.
            </p>
            <h2>1. The bustling old Delhi Bazars</h2>
            <img src={Img3} alt="" />
            <p>
              As soon as we step out into the clamour of an old Delhi Bazar like
              Chandi Chowk, we can easily sense the festivity. It’s a crowd in
              an organised fashion. There is life all over, right from the
              Street vendors who sell artificial jewellery, colourful
              sunglasses, the most delicious “naan- khatai”, and of course
              “pani- puri”, to the big shop owners who hire talented salespeople
              to persuade the buyers with their exceptional parodying skills.
              During the wedding season, we can find all the captivating colours
              in the Bazar that captures the charm of a big fat Indian wedding.
              The colour palette in the Bazar ranges from brightest reds to the
              brightest of yellows. The aesthetic alleys of the old Delhi Bazar
              are a merger of a lot of mannequins, the first copies of Manish
              Malhotra, dreams, expectations and the dynamics of life.
            </p>
            <h2>2. Lifeline of the city: Delhi Metro</h2>
            <img src={Img4} alt="" />
            <p>
              Delhi metro is similar to the veins in a human body. Like veins
              carry blood inside our body, Delhi metro carries the blood of the
              city- its people, from the “heart of the city” to the extreme
              corners. The closely-knit structure of the metro lines is exactly
              what makes it the most convenient form of public transport in the
              city. The constant fights for seats, first-time travellers asking
              “bhaiya, Kashmiri gate konsi jayegi?”, and of course the people
              who sit on the junctions (of a metro) every day, forming groups
              and friendships based on political debates, fluctuations in the
              share market, coincidental office life, C type charger sharing and
              other things of common interests, Delhi metro is absolutely a
              mood. It is like a mini Delhi on the tracks, in a rush, in a move.
            </p>
            <h2>3. A tryst on a Sunday afternoon: Daryaganj book market</h2>
            <img src={Img5} alt="" />
            <p>
              The Sunday book market in the “Mahila haat” is one of the obvious
              spots to visit and love in Delhi. The place is often packed with
              ambitious students and book lovers. On rare occasions, we can find
              books with underlines and quotes written by the readers based on
              their experiences and happenings. And knowing them is a good
              thing, I feel. In addition to this, books are pocket friendly and
              also in a readable condition. What else does a reader want?
            </p>
            <h2>4. The culture for street performances</h2>
            <img src={Img6} alt="" />
            <p>
              Street performances are often spotted around the university campus
              and in the different locations of the city. Students and theatre
              artists wear kurtas and shout slogans to aware masses all around
              the city. The acceptance of these performances by the citizens of
              Delhi and taking a conclusion or a question home and starting a
              discourse thereafter is the true spirit of a healthy life.
            </p>
            <h2> 5. The Heart of India: Dilli Haat</h2>
            <img src={Img7} alt="" />
            <p>
              Dilli Haats are very fascinating indeed. The theme-based cultural
              fares at Haats manifest the diversity of India. It’s basically
              “the heart of India”. Artisans from all over the country visit the
              regional fairs and sell their crafts. Clothes, painting, antique
              articles, pottery and items of home decor should be loved
              exceptionally. And the people who sit outside the gates of the
              haat and tie colourful braids in our hair are actually the ones
              adding colours to one of the most vibrant places of Delhi.
            </p>
            <img src={Img2} alt="" />
            <p>
              All in all, Delhi is about the bond that we want to cast with it.
              Some bond with the city through their love for food while others
              are simply kind to strangers.
            </p>
            <p>
              The Ultimate city of Delhi is a juxtaposition of old and new,
              traditional and modern and loud and subtle. Every inch of this
              city is so compatible, so blending, so passionate and “So Delhi”.
            </p>
            <p>
              It’s rightly said, “Shayad yahan ki hawa Mai hi kuch Khaas hai.”
            </p>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Blog;
