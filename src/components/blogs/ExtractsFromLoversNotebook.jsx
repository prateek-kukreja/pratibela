import BylineImg from "../../images/byline/naman-byline.png";
import Footer from "../footer/Footer";
import Newsletter from "../newsletter/Newsletter";
import MainImg from "../../images/blog/loversbook/book.png";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="blogcontent-heading">
          <h1>extracts from a lover's notebook</h1>
          <div className="blogcontent-heading-divider"></div>
          <div className="blogcontent-heading-byline">
            <div className="blogcontent-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="blogcontent-heading-byline__text">
              <p>naman rakheja</p>
              <p className="blogcontent-heading-byline__date">
                <time dateTime="2021-12-31">
                  PUBLISHED ON 23 September 2021
                </time>
                <span className="bull">•</span> 3 min read
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
              My letter is as middle class as I am. I will try to talk about
              stars and moon and galaxies, but eventually, it will end on things
              that I deserve.
            </p>
            <p>Dear…</p>
            <p>
              Do you ever look at the stars and think of long lost friends. I
              look at them every day, and I get the same light from those
              shining stars which I expect from you. I know it’s not right to
              expect this from someone, at least from a human figure, but I
              think I am into so much darkness.
              <br />
              It’s been a long time that I have been looking for you. A million
              people I meet every day, and no one feels like you. Although in
              some people I get a reflection of you, somehow it fades every
              single time. I felt wanted. I feet they trusted me. They might
              love me, but they were never willing to do this forever. And that
              is fair enough, everyone has their priorities, love, people, and I
              don’t want to break in. I don’t know, will it make sense to you or
              not, but I can actually feel a void in my life without you. I miss
              you when I am happy, and obviously, I need to be held tight when I
              am sad. I can imagine myself at the poolside party where everyone
              is happy and satisfied.
              <br />I am happy too, but I need you to be around me all the time
              because I have no one other than you to share my happiness with.
              During the difficult time of the day, as it happens most days, I
              need you to hold me like a shell covering the York. I feel
              vulnerable, exposed, underconfident and everything that you cover
              under the subject of insecurity. I don’t know who you are, how you
              look like. I will surely try to picture you.
            </p>
            <p>
              Aah! it is becoming hard, and I perhaps should continue it someday
              later.
            </p>
            <p>
              yours lovingly,
              <br />A long lost friend
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
