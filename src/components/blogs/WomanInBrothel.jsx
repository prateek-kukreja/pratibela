import BylineImg from "../../images/byline/naman-byline.png";
import Footer from "../footer/Footer";
import Newsletter from "../newsletter/Newsletter";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="blogcontent-heading">
          <h1>a woman in brothel</h1>
          <div className="blogcontent-heading-divider"></div>
          <div className="blogcontent-heading-byline">
            <div className="blogcontent-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="blogcontent-heading-byline__text">
              <p>naman rakheja</p>
              <p className="blogcontent-heading-byline__date">
                <time dateTime="2021-12-31">PUBLISHED ON 29 AUGUST 2021</time>
                <span className="bull">•</span> 10 min read
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="blogcontent-text">
            <p>
              Reena was married to Rajesh when she was twenty-two. “Raena”, the
              only son, is 9 years old and is a simple boy. They were the people
              of slums. The family owns a shack, ordinarily decorated with
              shining frills and some fancy lights. They do not own electricity
              for much of the day and usually get through the night with a “gas
              lantern” which the couple often carries to and from their “paan
              shop”. Recently Reena has gifted a “bicycle” to her husband
              because during summers Rajesh, usually gets ulcers on the palm of
              his feet as they walk ten kilometres every day. As it was a happy
              day for the entire family, the couple decided to throw a special
              dinner and invited some of their neighbours and close friends.
              Rajesh cooked chicken, and Reena helped him making rice. The party
              was evenly organised, men outside the shack enjoying their
              alcoholic drinks and chicken while playing cards, and women and
              children were chatting and enjoying their feast. The crowd wasn’t
              much, but the happiness of achievement was all over the
              atmosphere, after all, it was the savings from the past one year
              that made her capable enough so she could buy “hero-22 inch”.
              Realising the wheel as a symbol of progress, Reena found herself
              absolutely absorbed dreaming about their future days when the
              couple would drive the bicycle to the shop and make money and turn
              their life into something better. She was actually struggling to
              come out of her dreams and while serving chicken to her son,
              someone suddenly whispered in her ear that “Rajesh lost the
              bicycle to his mates in the game of cards”. Though she was
              devastated, she tried to act normal as people in the room were
              fishing for their own game. Controversies fascinate them all.
              Reena actually felt like a woman in a brothel, where some man’s
              desire and greed has got more value than honesty, dignity and love
              of that woman towards herself. After that day, Reena never asked
              anything from Rajesh. Following their daily routine, they walked
              to the “paan shop”, earned the usual, cooked the usual and lived
              the usual. Reena, who always scolded her husband to not smoke,
              never stopped him again. As Rajesh never said his apologies, they
              lived more like parents and less like partners to each other.
              Things were normal, yet they were not.
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
