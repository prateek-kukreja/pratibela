import BylineImg from "../../images/byline/naman-byline.png";
import Footer from "../footer/Footer";
import Newsletter from "../newsletter/Newsletter";
import MainImg from "../../images/blog/thats-life/life.png";
import Img1 from "../../images/blog/thats-life/smudging.png";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="blogcontent-heading">
          <h1>that’s life</h1>
          <div className="blogcontent-heading-divider"></div>
          <div className="blogcontent-heading-byline">
            <div className="blogcontent-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="blogcontent-heading-byline__text">
              <p>naman rakheja</p>
              <p className="blogcontent-heading-byline__date">
                <time dateTime="2021-12-31">PUBLISHED ON 2 August 2021</time>
                <span className="bull">•</span> 10 min read
              </p>
            </div>
          </div>
        </div>
        <div className="blogcontent-big-image">
          <img src={MainImg} alt="" />
        </div>
        <div className="container">
          <div className="blogcontent-text">
            <p>
              I sit in the good daylight, and the pattern of the window panes
              reflect the lightest oil pastel shade of pink which I suppose I
              should google as soon as possible. I was on page number two
              hundred and thirty-six, and it’s an epilogue. The opening line
              reads, “Life unfolds as and when it desires”. It’s a kind of power
              book. I read it again and again and again and try to derive more
              meaning from it. It doesn’t take much effort to comprehend but
              chewing it thirty-six times makes it rather a cliche. I have an
              opinion about the dialogues/ expressions that are labelled as
              cliche; Life is beautiful when expressed in cliches. It is at
              least for a moment of few seconds. No need to agree if you don’t.
              I rest silently on the same line and for a long three minutes. I
              am a slow reader.
            </p>
            <p>
              The silence ends with the fumbling footsteps approaching towards
              the spot. I am under the spot. Unlike the rushing footsteps, the
              light man slowly works on the console. The lights turned from
              bright yellow to intense red. The colour suppresses the oil Pastel
              Shades too. Two of us sit in the same spot, the fumbling footsteps
              and me. As silences are more powerful, the co-actor uses the same
              method to express. With a sigh, he mentions, “You lost the most
              precious person of my life”. It’s perfect red now, all over.
              Everywhere. I keep silent. I try to recollect those sounds and, it
              again says, “You lost…”. This time it is alarming. The script asks
              me to react in the loudest expression, but I always believed in
              silence, from the very beginning, from the early years of my
              teenage or maybe from even before. The script directs me with the
              dialogue of when? Where? How? I had dinner with “the precious”
              last night? Then what? Etc. But I keep silent. The co-actor asked
              to react as if giving me a clue that I am still alive. I give a
              blink of reassurance. I reassure myself that not only do I exist,
              but I am alive, too. The moments of silence makes me alive. if I
              had spoken anything as the script asked me to, I would have died
              at the very moment.
            </p>
            <img
              src={Img1}
              alt=""
              style={{
                height: "65vh ",
                objectFit: "cover",
              }}
            />
            <p>
              I said in a weak tone, “life hai”, with dry eyes piercing straight
              into the eyes of my co-actor. Maybe I hear it in a movie. It has a
              lot of subtext. I keep a limited smile. Which further adds to it.
              The whole scenario was like making out in dim light. You are the
              purest form of yourself in those moments, and the act in itself
              has got a lot of subtext in it. Add those moaning and whispers, do
              they not signal anything? The echoes of those opening lines of the
              epilogue have taken over my body. I am shivering. The abrupt
              fade-out makes the audience even more desperate.
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
