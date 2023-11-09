import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function pera() {
 return (
    <ParallaxProvider>
      <div className="App">
        <Parallax y={[-20, 20]}>
          <video src="./assets/your-video.mp4" autoPlay muted loop />
        </Parallax>
        {/* Your other components */}
      </div>
    </ParallaxProvider>
 );
}

export default pera;









// 




// import { animated, useSpring } from 'react-spring';


// function VideoBackground() {
//  const videoRef = useRef();

//  const [springProps, set] = useSpring(() => ({
//     loop: true,
//     to: [
//       { offset: 10 },
//       { offset: -100 },
//     ],
//     from: { offset: -100 },
//  }));

//  useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//  }, []);

//  return (
//     <animated.div
//       className="video-background"
//       style={{
//         ...springProps,
//         background: `url('./assets/your-video.mp4')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center center',
//         transformOrigin: '50% 50%',
//         zIndex: -1,
//       }}
//     />
//  );
// }


// function Pera() {
//  return (
//     <div className="App">
//       <VideoBackground />
//       {/* Your other components */}
//     </div>
//  );
// }

// export default Pera;



// import "./Home.css";
// import vediobg from "../assests/vedio/Intro Video (1).mp4";


// import React from 'react'

// function Pera() {
//   return (
//     <div className='wrapper'>
//         <div className="main">


//         <div className="container">
//           <p className="sub-h">Introducing Distractions AI</p>
//           <h className="M-head">
//             An unsuccessful life can result <br />
//             from addiction.
//           </h>
//           <p>
//             Liberating You from Addictive Consumption & Endless Scrolling,
//             Freeing You from <br />
//             the Shackles of Dark Platform Metaverse, Social Media, and
//             Pornography.
//           </p>
//           <div className="btn-l">
//             {" "}
//             <button type="button" class="btn btn-light b-1">
//               Get Started
//             </button>
//             <span>
//               <a href="#">Learn more </a>
//             </span>
//           </div>
//         </div>
    
//         <video className="vedio" autoPlay loop muted>
//           <source src={vediobg} type="video/mp4" />
//         </video>
     
//       </div>
      
  
//     </div>
//   )
// }

// export default Pera






















// // import React, { Component } from 'react';
// import './Pera.css'; // Import your CSS file
// import { gsap } from 'gsap';
// import './script.js';
// import vediobg from "../assests/vedio/Intro Video (1).mp4";
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"/>



// // import './Pera.css';

   



// function pera() {
// var tl = gsap.timeline({
// scrollTrigger:{
// trigger: '#page1',
// start: 'top top',
// scrub:1,
// scroller:'#main',
// market: true,
// pin: true

// }
// })
// tl.to("#page1>h1" ,{
// top:'-50%',
// })



// return (
// <div id="page1">
// <h1>hello hiiii </h1>
// {/* <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg" alt=""/> */}
// <video className="vedio" autoplay muted  src={vediobg}>


// </video>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
// <script src="script.js"></script>
// </div>

// );
// }

// export default pera;





// // class pera extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       scrollOffset: 0,
// //     };
// //   }

// //   handleScroll = () => {
// //     this.setState({
// //       scrollOffset: window.pageYOffset,
// //     });
// //   };

// //   componentDidMount() {
// //     window.addEventListener('scroll', this.handleScroll);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener('scroll', this.handleScroll);
// //   }

// //   render() {
// //     const { scrollOffset } = this.state;

// //     return (
// //       <div className="parallax-container">
// //         <div className="parallax">
// //           <h1 style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
// //             Scrolling Text Example
// //           </h1>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default pera;
// // import React, { Component } from 'react';
// // import './Pera.css'; // Import your CSS file

// // class Para extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       scrollOffset: 0,
// //     };
// //   }

// //   handleScroll = () => {
// //     this.setState({
// //       scrollOffset: window.pageYOffset,
// //     });
// //   };

// //   componentDidMount() {
// //     window.addEventListener('scroll', this.handleScroll);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener('scroll', this.handleScroll);
// //   }

// //   render() {
// //     const { scrollOffset } = this.state;

// //     return (
// //         <>
// //       <div className="parallax-container">
// //         <video className="video" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <div className="parallax-text" style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
// //           <h1>Scrolling Text with Parallax Effect</h1>
// //           <p>Your additional text here</p>
// //         </div>
// //       </div>
// //         <div className="parallax-container">
// //         <video className="video-1" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <div className="parallax-text" style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
// //           <h1>Scrolling Text with Parallax Effect</h1>
// //           <p>Your additional text here</p>
// //         </div>
// //       </div>
// //       <div className="parallax-container">
// //         <video className="video-1" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <div className="parallax-text" style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
// //           <h1>Scrolling Text with Parallax Effect</h1>
// //           <p>Your additional text here</p>
// //         </div>
// //       </div>
// //       </>
// //     );
// //   }
// // }

// // export default Para;

// // import React, { Component } from 'react';
// // import './Pera.css'; // Import your CSS file

// // class pera extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       scrollOffset: 0,
// //     };
// //   }

// //   handleScroll = () => {
// //     this.setState({
// //       scrollOffset: window.pageYOffset,
// //     });
// //   };

// //   componentDidMount() {
// //     window.addEventListener('scroll', this.handleScroll);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener('scroll', this.handleScroll);
// //   }

// //   render() {
// //     const { scrollOffset } = this.state;

// //     return (
// //       <div className="parallax-container">
// //         <div className="parallax">
// //           <div className="text-container" style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
// //             <h1>Scrolling Text Example</h1>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default pera;




// // import React from "react";
// // import vediobg from "../assests/vedio/Intro Video (1).mp4";
// // import "../components/Pera.css";

// // function Pera() {
// //     // const parallax = document.getElementById("parallax");

// //     // window.addEventListener("scroll", function () {

// //     //     const offset = window.pageYOffset;
// //     //     parallax.style.backgroundPositionY = offset
// //     //     * 0.7 + "px";
// //     // })
// //   return (
// //     <>

// //       <div className="peravedio" id="parallax">
// //         <video className="vedio" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <h1>Hwllow Shweta wgats up</h1>
// //       </div>
// //       <div className="content bg2">
// //         <div className="contaner">
// //           <h1>
           
// //           </h1>
// //           <h1>tgrwyery</h1>
// //           <h1>tgrwyery</h1>
// //         </div>
// //       </div>
// //       <div className="peravedio">
// //         <video className="vedio" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <h1>Hwllow Shweta wgats up</h1>
// //       </div>
// //       <div className="content bgi">
// //         <div className="contaner">
// //           <h1>tgrwyery</h1>
// //           <h1>tgrwyery</h1>
// //           <h1>tgrwyery</h1>
// //         </div>
// //       </div>
// //       <div className="peracontent">
// //         <div className="contaner">
// //           <h1>
// //             If you find any bug or have problems and/or ideas regarding this
// //             library feel free to open an issue or pull request. Either way
// //             please create a working example so I can reproduce it. Link to a
// //             repository or even easier - fork the demo codesandbox project. This
// //             would help a lot.
// //           </h1>
// //           <h1>tgrwyery</h1>
// //           <h1>tgrwyery</h1>
// //         </div>
// //       </div>
// //         <div className="peravedio-2">
// //         <video className="vedio-2" autoPlay loop muted>
// //           <source src={vediobg} type="video/mp4" />
// //         </video>
// //         <h1>Hwllow Shweta wgats up</h1>
// //       </div>
// //     </>
// //   );
// // }

// // export default Pera;
