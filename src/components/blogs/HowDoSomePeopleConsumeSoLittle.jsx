import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";
import Img1 from "../../images/blog/metabolism/old-lady-hands.png";
import Img2 from "../../images/blog/metabolism/slum-lady.png";
import Img3 from "../../images/blog/metabolism/sleeping-man-on-foothpath.png";
import Img4 from "../../images/blog/metabolism/rickshaw-guy.png";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
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
            <p>
              How do some people simply breathe so little air? How their
              existence in the room they are breathing is very negligible? How
              some abstract designs on the wall grab more breathtaking
              expressions than that person’s existence altogether? And how the
              same people, who are difficult to spot, choose not to put these
              paintings down.
            </p>
            <p>
              The #BiggestRoadShowEver is the recent and major example of
              “Poverty and Politics”. In the name of beautification and
              cleanliness drive, just before the event “Namaste Trump”,
              four-foot-high walls were built along the side of roads to avoid
              the unpleasant view of the slums. The humanity on the other side
              of the wall was being made completely invisible. Poverty has
              always been a subject of ignorance, politics and shame for the
              rulers. Governments close their eyes on the face of it, then they
              acknowledge it rather reluctantly, perhaps for the sake of image
              building and finally they try to hide it again for boosting the
              same public image. They spent money on hiding poverty but are
              least concerned about reducing it. Beyond the atrocities of poor
              health, education and survival on less than a square meal of food
              these people suffer from our lack of compassion too. I am no
              psychology graduate but out of my basic understanding of life I
              too accept, “If you are a cheat, you will expect others to cheat
              on you”. Perhaps that is a reason why we as a society are growing
              less compassionate and more sceptical about these people with each
              passing hour.
            </p>
            <img src={Img2} alt="" />
            <p>
              If not from the same tap we drink or the same size of land we own,
              we still share the same sources of survival. We get water from the
              same streams and rains. All of us breathe the same air. All of us
              wear the same sky, though some of us choose to layer it with
              concrete blankets while others are left with corrugated sheets,
              straw and some people are out of resources.
            </p>
            <p>
              As I live in a big city with lots of city lights, highways,
              dividers and footpaths, underpasses and vibrant bazaars, for me,
              most of the time these city lights are profound, emotionally
              connecting or simply deep. I never realised that these lights
              create a sense of security for them during the utmost nights. Busy
              roads have visible dividers and an invisible population, who is in
              motion only when the lights turn Red. And Under the face of the
              same busy roads and metropolitan cities there exist several
              underpasses. We mostly use them to cross roads. The people who
              belong to these undergrounds in our cities always try to suck the
              sympathy out of soulless pedestrians as and when they pass. The
              clamour in a bustling bazaar is always so loud that it seems quite
              easy to ignore the people asking for food and water, money and
              clothes. Similarly, the fancy walks of the promenades, the
              boundaries of big restaurants in our localities, outside the
              places where people meet their respective gods and almost
              everywhere poverty is swelling. How strange is it to have some
              people around us who own so less and yet they absorb so much? And
              despite taking a call to action we choose to be numb about it.
            </p>
            <img src={Img3} alt="" />
            <p>
              Through this piece of writing, I am not compelling anyone to
              address this problem by simply putting currency notes or coins in
              the hands of beggars. This must be satisfying for us for a moment
              or we do it because we have seen people around us doing the same
              without actually acknowledging them as human entities. But there
              is a sheer need for acceptance and acknowledgement. We need to
              accept that these people exist around us. We see them every day.
              And it is we, the more privileged among the god’s children, who
              has the potential and resources, who can help them. Don’t put
              coins in their hands, extract them out of poverty by putting their
              kids in schools, reach out to NGOs who are working for the same,
              provide adults with a skill-based job, if it is possible. Most
              importantly, help them be literate. Literacy is the only solution
              that will help them in maintaining distance from poverty. Apart
              from this, let us purchase packaged food (at least) like chips,
              chocolates, biscuits, butter etc from street vendors (of course
              after checking the date, as we do in supermarkets). Similarly,
              purchase novels, storybooks and other books from bus stands and
              metro stations. If we are purchasing any goods or availing any
              service from street vendors or say rickshawala, and if we find the
              cost reasonable, we should avoid bargaining because it’s a habit.
            </p>
            <img src={Img4} alt="" />
            <p>
              Most importantly, at the end of the day, we all have the power to
              vote for a candidate who is human enough to be committed to this
              issue. We have the power to change what is existing around us
              altogether so that poor people don’t just exist like “numbers”.
              Yes, “The numbers” who are highly exposed to calamities and
              crises. Share this:
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
