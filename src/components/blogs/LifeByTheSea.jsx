import BylineImg from "../../images/byline/naman-byline.png";
import Footer from "../footer/Footer";
import Newsletter from "../newsletter/Newsletter";
import MainImg from "../../images/blog/life-by-the-sea/beach.png";
import Img1 from "../../images/blog/life-by-the-sea/woman-feets.png";
import Img2 from "../../images/blog/life-by-the-sea/foot-print.png";

function Blog() {
  return (
    <>
      <section className="blogcontent-section">
        <div className="blogcontent-heading">
          <h1>life by the sea</h1>
          <div className="blogcontent-heading-divider"></div>
          <div className="blogcontent-heading-byline">
            <div className="blogcontent-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="blogcontent-heading-byline__text">
              <p>naman rakheja</p>
              <p className="blogcontent-heading-byline__date">
                <time dateTime="2021-12-31">PUBLISHED ON 18 August 2021</time>
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
              I wish I could live by the sea, or some days I wish I could just
              live in my apartment and the windows open to the sea. They are
              different in the absolute sense. The sand and the pebbles on the
              beach are so relatable. They get to life only when the sea wants
              to. Are they actually getting a life? Or are they being washed
              away with every drop that the wave carries? I forgive the sea for
              its birth-giving. The more I look deep into it, the often I find
              movements in it confusing.
            </p>
            <img src={Img1} alt="" />
            <p>
              I lived by the sea for an hour. When I talk about living by the
              sea it is just me and the confusing waters. Standing in the
              infinite waters but still making an impression on those temporary
              sands, though I never liked it for washing away my footprints, but
              it happened for a reason, I guess. Will you trust a human who has
              just made eye contact with you? The sea asks for more love, more
              patience, more honesty and above all sense of belonging.
            </p>
            <p>
              Perhaps one day I will live by the sea. I know it asks for a lot
              of sacrifices, after all, it has offered a part of it to less than
              no one. You know, what will we talk about? The sufferings. I feel
              the sea has more precise answers to tell. I regret why every
              living entity on this beautiful planet, the only planet that
              sustains life, has its share in sufferings. Let’s talk about
              Humanity, the greatest of all species, and how humanity all around
              the world is direly suffering. Countries are ravaged by wars and
              their people are suffering from humanitarian crises. I will surely
              ask the sea, “why people are fighting the wars when the only thing
              that sustains life is peace?” We will also talk about dying
              principles, morality, tolerance and compassion among the citizens
              of this world. Why people are becoming more and more intolerant
              with each passing hour? In the mildest sense, I believe,
              intolerance is the reason why people are dying alone. I can’t even
              estimate the reasons that create overwhelming suffering humanity,
              and as Sea tends to be in contact with a lot of human beings, I
              will surely ask it for what these people are suffering about. What
              are the things that they want freedom from? Why it is so hard for
              them to express themselves? From the sea, I want to know about
              this world, its suffering population and their reasons.
            </p>
            <img
              src={Img2}
              alt=""
              style={{
                height: "65vh ",
                objectFit: "cover",
              }}
            />
            <p>
              People, who watch other people suffering, do they get any
              affected? Who are they? Do they have hearts beneath the surface?
              Because People and communities in power seem to care the least.
              And the hard thing is people on the other side of the world who
              neither seem to have any contact with those affected population
              nor with humanity, tends to make sadistic comments about the
              wildfires and humanitarian crises, poverty and dying public.
              <br /> I don’t know where these suffering people seek refuge and
              hope. I want to build a bond with the sea, so that I can extract
              the answers I will never get otherwise. I expect it is not
              something you ask when you look out of your windows to witness the
              aesthetic dawn and dusk moments, and in those moments of utmost
              beauty, the sea never smiles at you.
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
