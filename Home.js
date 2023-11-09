import React from "react";
// import { Parallax,ParallaxLayer } from "react-parallax";
import { Parallax, ParallaxLayer } from "react-parallax";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import vediobg from "../assests/vedio/Intro Video (1).mp4";
import img1 from "../assests/images/Image.svg";
import vediobg2 from "../assests/vedio/Welcome Video 1.mp4";
import vediobg3 from "../assests/vedio/Welcome video 2.mp4";
import vediobg4 from "../assests/vedio/Welcome video 3.mp4";
import vediobg5 from "../assests/vedio/Welcome Video 4.mp4";
import vediobg6 from "../assests/vedio/welcome video 5.mp4";
import vediobg7 from "../assests/vedio/save yourself video.mp4";
import vediobg8 from "../assests/vedio/ruiling life video.mp4";
import img2 from "../assests/images/Group 15 Image.png";
import img3 from "../assests/images/Group 14 Image.png";
import img4 from "../assests/images/Group 14 Image 2.png";
import img5 from "../assests/images/Group 13 Image.png";
import img6 from "../assests/images/Group 14 Image 1.png";
import imga from "../assests/images/Frame 479.png";
import imgb from "../assests/images/Group 14.png";
import imgc from "../assests/images/Group 14 (2).png";
import imgd from "../assests/images/Group 13.png";
import imge from "../assests/images/Frame 480 (2).png";
import two1 from "../assests/images/two img.jpg";
import two2 from "../assests/images/wo-img2.jpg";
import imgslider1 from "../assests/images/Oprah Winfrey.jpg";
import imgslider2 from "../assests/images/Overlay.jpg";
import imgslider3 from "../assests/images/Warren Buffett.jpg";
import imgslider4 from "../assests/images/Richard Branson.jpg";
import imgb1 from "../assests/images/photo 4.png";
import imgb2 from "../assests/images/id-photo2-fotor-2023061715497.png";
import imgb3 from "../assests/images/photo 2.png";
import imgb4 from "../assests/images/photo 1.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Button } from "bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";

function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <video className="vedio" autoPlay loop muted>
          <source src={vediobg} type="video/mp4" />
        </video>
        <div className="container">
          <p className="sub-h">Introducing Distractions AI</p>
          <h className="M-head">
            An unsuccessful life can result <br />
            from addiction.
          </h>
          <p>
            Liberating You from Addictive Consumption & Endless Scrolling,
            Freeing You from <br />
            the Shackles of Dark Platform Metaverse, Social Media, and
            Pornography.
          </p>
          <div className="btn-l">
            {" "}
            <button type="button" class="btn btn-light b-1">
              Get Started
            </button>
            <span>
              <a href="#">Learn more </a>
            </span>
          </div>
        </div>
      </div>

      {/* {second-section} */}
      <div className="sectiont-2">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg2} type="video/mp4" />
        </video>
        <div className="container-2">
          <h className="M-head">Welcome to the realm of attaining triumph.</h>
        </div>
      </div>

      <div className="sectiont-3">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg3} type="video/mp4" />
        </video>
        <div className="container-3">
          <h className="M-head">
            Distractions AI liberates from social media, heralds focus's reign.
          </h>
        </div>
      </div>

      <div className="sectiont4">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg4} type="video/mp4" />
        </video>
        <div className="container-4">
          <h className="M-head">
            Seize chance: break porn habit, embrace growth beyond comfort.
          </h>
          <h className="M-head">
            Live with self-control, free from addictive apps, in ways never
            before possible.{" "}
          </h>
        </div>
      </div>

      <div className="sectiont5">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-5">
          <h className="M-head">
            Your child's free from phone addiction, bad sites—embracing true
            childhood.
          </h>
        </div>
      </div>

      {/* <Parallax pages={1} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>

  */}

      {/* <section class="flex-center">
     <div class="slide-bg" data-parallax>
      <video src={vediobg} autoPlay loop muted></video>
    </div> 
    <div className="container-6">
        <h className="M-head">
        You've never experienced a life transformation like this before.
        </h>
      </div>
  </section>
   */}

      <div className="sectiont6">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg6} type="video/mp4" />
        </video>
        <div className="container-6">
          <h className="M-head">
            You've never experienced a life transformation like this before.
          </h>
        </div>
      </div>

      {/* next-section */}

      <div className="medile">
        <div className="h-h2">
          {/* <div className="col-12"> */}
          <div className="img-2">
            <img src={img1} className="d-block w-100 img" alt="..." />
          </div>
          <h2 className="h-h2">Distractions AI</h2>
        </div>
        {/* </div> */}

        <div className="row-0">
          <div className="get-sign col-1">
            <h className="heading" aria-current="page" href="#">
              Get Started
            </h>
          </div>
          <div className="get-sign col-1">
            <h className="heading" aria-current="page" href="#">
              Sign in
            </h>
          </div>
        </div>

        <p>Escaping the Clutches of Addictions!</p>

        <div className="images-coll">
          <div class="responsive">
            <div class="gallery-1">
              <a target="_blank" href="img_5terre.jpg">
                <img src={img2} className="d-block w-100 img" alt="..." />
              </a>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery-1">
              <a target="_blank" href="img_5terre.jpg">
                <img src={img3} className="d-block w-100 img" alt="..." />
              </a>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery-1">
              <a target="_blank" href="img_5terre.jpg">
                <img src={img4} className="d-block w-100 img" alt="..." />
              </a>
            </div>
          </div>
        </div>
        <div className="images-coll-1">
          <div class="responsive">
            <div class="gallery-1">
              <a target="_blank" href="img_5terre.jpg">
                <img src={img5} className="d-block w-100 img" alt="..." />
              </a>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery-1">
              <a target="_blank" href="img_5terre.jpg">
                <img src={img6} className="d-block w-100 img" alt="..." />
              </a>
            </div>
          </div>
        </div>

        <div className="Our-Innovation ">
          <div className="head-Our Innovation ">
            <h1>Our Innovation </h1>
          </div>
          <div className="pera-our">
            <p>Revolutionizing your, entire existence.</p>
          </div>

          <div class="row-black">
            <div class="column">
              <img src={imga} alt="Snow" />
              <p>Dash AI</p>
            </div>
            <div class="column">
              <img src={imgb} alt="Forest" />
              <p>Dream AI</p>
            </div>
            <div class="column">
              <img src={imgc} alt="Mountains" />
              <p>Distract ALT</p>
            </div>
            <div class="column">
              <img src={imgd} alt="Mountains" />
              <p>Heart AI</p>
            </div>
            <div class="column">
              <img src={imge} alt="Mountains" />
              <p>Community</p>
            </div>
          </div>
        </div>
      </div>

      <div className="About Distract AI">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-01">
          <p>Introducing Distract ALT</p>
          <h className="M-head">
            Limit all distractions, and be <br /> present again.
          </h>
        </div>
      </div>

      <div className="content-part">
        <div className="part">
          <div className="h-h3">
            <h3>Grasp life's path: victory or decline.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Embrace the present moment, eliminate all distractions, and
              rekindle your presence. Step into the realm of excellence with
              Distract ALT Mode - empowering you to set precise time limits for
              distracting apps and websites. Our vigilant AI monitors and
              unlocks access exclusively once tasks are concluded, thus
              safeguarding your unwavering concentration. Forge the path towards
              triumphant success.
            </p>
            <button type="button" class="  btn-12">
              About Distract AI
            </button>
          </div>
        </div>
      </div>

      <div className="About Distract AI">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-02">
          <p>Introducing Dream AI</p>
          <h className="M-head">
            Distractions free, chase <br />
            dreams in the realm of slumber.
          </h>
        </div>
      </div>

      <div className="content-part">
        <div className="part">
          <div className="h-h3">
            <h3>Embrace freedom, chase dreams in dreamscape.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Embrace a respite from the ceaseless distractions of the world and
              dedicate your nocturnal hours to pursuing your aspirations.
              Immerse in Dream AI Mode, which carefully monitors and limits
              access to distracting apps and sites until tasks are fulfilled. By
              avoiding smartphone diversions, your focus remains steadfast on
              your work or studies. Propel yourself towards the coveted heights
              of success.
            </p>
            <button type="button" class="  btn-12">
              About Distract AI
            </button>
          </div>
        </div>
      </div>

      <div className="About Distract AI">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-03">
          <p>Introducing Distract ALT</p>
          <h className="M-head">
            Limit all distractions, and be
            <br /> present again.
          </h>
        </div>
      </div>

      <div className="content-part">
        <div className="part">
          <div className="h-h3">
            <h3>Embrace now, cut distractions.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Embrace the present moment, eliminate all distractions, and
              rekindle your presence. Step into the realm of excellence with
              Distract ALT Mode - empowering you to set precise time limits for
              distracting apps and websites. Our vigilant AI monitors and
              unlocks access exclusively once tasks are concluded, thus
              safeguarding your unwavering concentration. Forge the path towards
              triumphant success.
            </p>
            <button type="button" class="  btn-12">
              About Distract AI
            </button>
          </div>
        </div>
      </div>

      <div className="About Distract AI">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-04">
          <p>Introducing Heart AI</p>
          <h className="M-head">
            Regain focus: work freely,
            <br /> halt endless scrolling.
          </h>
        </div>
      </div>

      <div className="content-part">
        <div className="part">
          <div className="h-h3">
            <h3>Work freely, end scrolling distractions.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Resume your work promptly by achieving the freedom to cease
              ceaseless scrolling. Step into the realm of Heart AI: a guiding
              beacon amidst the indulgence of social media. Feeling the need to
              disconnect? A simple touch invokes its power to immediately pause
              applications or websites, emancipating you from boundless
              scrolling and consumption pitfalls. Behold as the path to success
              unfurls before you.
            </p>
            <button type="button" class="  btn-12">
              About Distract AI
            </button>
          </div>
        </div>
      </div>
      <div className="About Distract AI">
        <video width="100%" height="640" autoPlay loop muted>
          <source src={vediobg5} type="video/mp4" />
        </video>
        <div className="container-05">
          <p>Introducing Community</p>
          <h className="M-head">
            Network = Net worth for <br />
            achieving success.
          </h>
        </div>
      </div>

      <div className="content-part">
        <div className="part">
          <div className="h-h3">
            <h3>Weave connections, build valuable success.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Your network is synonymous with your net worth when it comes to
              attaining success. Within the Distractions AI community, embark on
              a transformative journey towards triumph, alongside kindred
              spirits who share your aspirations. Engage, connect, converse,
              ideate, and cultivate profound connections with like-minded
              visionaries. Always recall, your network molds your destiny."
            </p>
            <button type="button" class="  btn-12">
              About Distract AI
            </button>
          </div>
        </div>
      </div>

      <div className="Ready">
        <h className="he-ready">Ready to succeed?</h>
        <button type="button" class="btn-11">
          Get Started.
        </button>
      </div>
      <div className="Comparing">
        <div className="two-img">
          <img src={two1} className="d-block w-100 img" alt="..." />
          <img src={two2} className="d-block w-100 img" alt="..." />
        </div>
      </div>
      <div className="content-two">
        <div className="part">
          <div className="h-h3">
            <h3>Comparing Unsuccessful vs. Successful Peoples.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              When contrasting unsuccessful people, who often succumb to the
              allure of digital distractions, with their successful
              counterparts, a stark dichotomy emerges. The former tend to be
              entrapped in a cycle of aimless scrolling and transient
              diversions, diluting their potential for achievement. In contrast,
              successful people exude a steadfast dedication to their dreams,
              goals, and the pursuit of success. This resolute focus empowers
              them to channel their energies purposefully, driving them closer
              to their aspirations and yielding tangible accomplishments.
            </p>
          </div>
        </div>
      </div>

      <div className="vedo">
        <video width="99%" height="590" autoPlay loop muted>
          <source src={vediobg7} type="video/mp4" />
        </video>
      </div>
      <div className="content-two">
        <div className="part">
          <div className="h-h3">
            <h3>Social media is ruining your life.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Relentless digital distractions ensnare lives in a modern horror
              web. Social media's allure becomes a devouring abyss, erasing
              precious moments. Mobile phones shift from tools to binding
              chains, fueling shallow notifications. Porn and masturbation
              addictions promise pleasure, but enslave in emptiness. Amid
              tightening digital demons, lives fracture, sanity crumbles, and
              existence dissolves into a haunting abyss.
            </p>
          </div>
        </div>
      </div>
      <div className="vedo">
        <video width="99%" height="590" autoPlay loop muted>
          <source src={vediobg8} type="video/mp4" />
        </video>
      </div>
      <div className="content-two">
        <div className="part">
          <div className="h-h3">
            <h3>Social media is ruining your life.</h3>
          </div>
          <div className="h-medile">
            <p className="p-part">
              Relentless digital distractions ensnare lives in a modern horror
              web. Social media's allure becomes a devouring abyss, erasing
              precious moments. Mobile phones shift from tools to binding
              chains, fueling shallow notifications. Porn and masturbation
              addictions promise pleasure, but enslave in emptiness. Amid
              tightening digital demons, lives fracture, sanity crumbles, and
              existence dissolves into a haunting abyss.
            </p>
            <button type="button" class="btn-12">
              Get Started.
            </button>
          </div>
        </div>
      </div>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imgslider2}
              className="d-block w-100 imageslider"
              alt="..."
            />
            <div className="carousel-caption d-md-block caption">
              <h3>Elon Musk </h3>
              <p className="pera-slider">
                “Constant digital distractions can erode your focus, leaving you
                orbiting around productivity instead of landing on it."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgslider3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block caption">
              <h5 className="head">Warren Buffett </h5>
              <p className="pera-slider">
                {" "}
                "Invest in yourself by investing your attention wisely. The best
                returns come from a mind free from the shackles of constant
                digital diversions."
              </p>

              {/* <button type="button" class="btn btn-outline-danger">Danger</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgslider4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block caption">
              <h5 className="head">Oprah Winfrey</h5> <br />
              <p className="pera-slider">
                "Don't let the glow of screens dim the brilliance of real-life
                connections. True fulfillment lies in the moments we share, not
                just the ones we capture."
              </p>
              {/* <button type="button" class="btn btn-outline-danger">Danger</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgslider1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block caption">
              <h5 className="head">Richard Branson</h5>
              <p className="pera-slider">
                "Mastery comes from discipline, not addiction. Channel your
                energy into productive pursuits."
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="icon-h">
              {" "}
              <BsArrowLeftCircle />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="icon-h">
              {" "}
              <BsArrowRightCircle />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        id="carouselExampleInterval"
        class="carousel slide b-slider"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner blog">
          <div class="carousel-item blog-c active" data-bs-interval="10000">
            <img src={imgb1} class="d-block img-b" alt="..." />
            {/* <div className="bolg-content"> */}
            <h3>Samantha Johnson</h3>
            <p>
              Distractions AI is a game-changer! Dash AI keeps me on track,
              making work a breeze. Dream AI mode banishes distractions after
              tasks, skyrocketing my productivity. Distract ALT is my time
              manager. Heart AI empowers against social media traps. The
              community's support fuels my entrepreneurial journey. Success
              beckons with Distractions AI!
            </p>
            {/* </div> */}
          </div>
          <div class="carousel-item blog-c" data-bs-interval="2000">
            <img src={imgb2} class="d-block  img-b" alt="..." />
            <div className="bolg-content">
            <h3>Samantha Johnson</h3>
            <p>
              Distractions AI is a game-changer! Dash AI keeps me on track,
              making work a breeze. Dream AI mode banishes distractions after
              tasks, skyrocketing my productivity. Distract ALT is my time
              manager. Heart AI empowers against social media traps. The
              community's support fuels my entrepreneurial journey. Success
              beckons with Distractions AI!
            </p>
          </div>
          </div>
          <div class="carousel-item blog-c">
            <img src={imgb3} class="d-block   img-b" alt="..." />
            <div className="bolg-content">
            <h3>Samantha Johnson</h3>
            <p>
              Distractions AI is a game-changer! Dash AI keeps me on track,
              making work a breeze. Dream AI mode banishes distractions after
              tasks, skyrocketing my productivity. Distract ALT is my time
              manager. Heart AI empowers against social media traps. The
              community's support fuels my entrepreneurial journey. Success
              beckons with Distractions AI!
            </p>
            </div>
          </div>
          <div class="carousel-item blog-c">
            <img src={imgb4} class="d-block  img-b" alt="..." />
            <div className="bolg-content">
            <h3>Samantha Johnson</h3>
            <p>
              Distractions AI is a game-changer! Dash AI keeps me on track,
              making work a breeze. Dream AI mode banishes distractions after
              tasks, skyrocketing my productivity. Distract ALT is my time
              manager. Heart AI empowers against social media traps. The
              community's support fuels my entrepreneurial journey. Success
              beckons with Distractions AI!
            </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="footer">
        <div className="f-section">
<h3 >Frequently Asked 
Questions.</h3>
<hr/>

<ol className="u">
  <li>What is Distractions AI and how does it work? <RiArrowDownSLine/> </li>
  <hr/>
  <li>How does Dream AI Mode work?  <i className="icon"><RiArrowDownSLine/></i> </li>
  <hr/>
  <li>What is Distract ALT Mode and how can it help me stay focused?  <RiArrowDownSLine/></li>
  <hr/>
  <li>How does Dash AI assist in prioritizing work and studies ?  <RiArrowDownSLine/></li>
  <hr/>
  <li>Can I customize the settings in Distractions AI?  <RiArrowDownSLine/></li>
  <hr/>
  <li>Is Distractions AI available on all devices? <RiArrowDownSLine/></li>
</ol>



        </div>




      </div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"/>
      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js" integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js" integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
    </div>
  );
}

export default Home;
