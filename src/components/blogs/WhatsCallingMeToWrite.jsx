import "./stylesheets/WhatsCallingMeToWrite.scss";
import BylineImg from "../../images/byline/naman-byline.png";
import Img1 from "../../images/blog/inspiration/lamp-photo.png";
import Img2 from "../../images/blog/inspiration/ballet-girl.png";
import Img3 from "../../images/blog/inspiration/blur-light.png";
function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="container">
          <div className="blogcontent-heading">
            <h1>How do some people consume so little?</h1>
            <div className="blogcontent-heading-divider"></div>
            <div className="blogcontent-heading-byline">
              <div className="blogcontent-heading-byline__img">
                <img src={BylineImg} alt="" />
              </div>
              <div className="blogcontent-heading-byline__text">
                <p>naman rakheja</p>
                <p className="blogcontent-heading-byline__date">
                  <time dateTime="2021-12-31">
                    PUBLISHED ON 25 NOVEMBER 2020
                  </time>
                  <span className="bull">•</span> 10 min read
                </p>
              </div>
            </div>
          </div>
          <div className="blogcontent-image">
            <img src={Img1} alt="" />
          </div>
          <div className="blogcontent-text">
            <p>
              All of it had started from writing paragraphs on different
              subjects ranging from, “if I were a peacock” to “if I were the
              prime minister”. I was naive, therefore my opinions oscillated
              simply from one extreme to another. In those paragraphs about
              “being the prime minister”, I remember how desperately I wrote, “I
              want to be the prime minister because I want good education and
              health for future generation”. In those days being a prime
              minister was a matter of responsibility, welfare and upliftment
              (at least in the classrooms) but in contemporary times, it seems
              more about oration. And peacock, being the national bird,
              willingly took all the responsibilities. I was a good orator too.
              Nevertheless, the habit of putting myself in different
              hypothetical situations has made my imagination stronger than
              ever. To be someone on day one and to be someone else, the
              subsequent day was exciting.
            </p>
            <p>
              The continuous self-expressions in the mirror were of great help
              too. The moments when I used to act as a film star, or when I
              chose to dress like a girl, wearing my elder sister’s clothes
              which were quite loose to fit on my body. Perhaps that’s the
              reason why I like oversized clothes so much. Mirrors in the
              dressing rooms were always special because they compel for
              different perspectives to look at. I still talk to mirrors. It
              helps to introspect and to channelise thoughts and opinions quite
              often.
            </p>
          </div>
          <div className="blogcontent-image">
            <img src={Img2} alt="" />
          </div>
          <div className="blogcontent-text">
            <p>
              Growing up always feels like putting ourselves on the cycle of
              metamorphosis. I want to talk about metamorphosis and how some
              people simply choose to deny the process. I live in a big city
              with lots of city lights. Moving under these lights is comfortable
              as they nurture dreams and tomorrows, hopes and futures but on the
              other hand, it generates a sense of fear. I remember, how secretly
              I wish these lights to never turn off until dawn. I am afraid of
              it in the way I was afraid of the geysers and how I used to
              double-check it, and how I double-check the padlocks till date.
              The city lights have created a thrust altogether, and beyond these
              lights there exist a world of these people which everyone often
              chooses to ignore.
            </p>
          </div>
          <div className="blogcontent-image">
            <img src={Img3} alt="" />
          </div>
          <div className="blogcontent-text">
            <p>
              Writing letters on a daily basis, if not to someone else but to
              myself only, has made me a bit more expressive because one of my
              friends says “paper is the most patient of all”. If we look at
              things and lives from the deeper end, everything that surrounds
              us, however, belongs to any nature has the power to seek out
              opinions. In my case, my past experiences, observations, dreams
              and habits are the ones calling me to write.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
