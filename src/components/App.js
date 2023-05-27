import { useEffect, useState } from 'react';
import '../App.css';
import AboutMe from './AboutMe';
import HeaderLinks from './Header/HeaderLinksBox';
import Work from './Work/Work';

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [aboutMeHeight, setAboutMeHeight] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);

  useEffect(() => {
    const ScrollListener = () => setWindowScroll(window.scrollY);
    const HeightListener = () => setWindowHeight(window.innerHeight);
    const WidthListener = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", ScrollListener);
    window.addEventListener("resize", HeightListener);
    window.addEventListener("resize", WidthListener);

    return () => {
      window.removeEventListener("scroll", ScrollListener);
      window.removeEventListener("resize", HeightListener)
      window.removeEventListener("resize", WidthListener)
    };
  }, []);

  // useEffect(() => {
  //   console.log("window height", windowHeight)
  // }, [windowHeight])

  return (
    <div className="App">

      <div className="header">
        <div className='font-montserrat' style={{ fontSize: "32px", borderTop: "0.5px solid white", borderBottom: "0.5px solid white" }}>
          <span style={{ letterSpacing: "1px" }}>G_W<span style={{ fontSize: "0.55em", letterSpacing: "2px" }}>.dev</span></span>
        </div>
        <HeaderLinks windowScroll={windowScroll} aboutMeHeight={aboutMeHeight} workHeight={workHeight} />
      </div>

      <div className="main">
        <div id="about-me">
          <AboutMe setHeight={setAboutMeHeight} />
        </div>
        <div id="work">
          <Work setHeight={setWorkHeight} windowHeight={windowHeight} windowWidth={windowWidth} />
        </div>

        <div id="contact" style={{ paddingTop: "6rem", height: windowHeight * 0.7 }}>
          <h2 style={{ margin: '0 0 40px', fontSize: "3rem" }}>Contact</h2>
          <form>
            <label htmlFor="title">Subject:</label><br />
            <input id="title" type="text" style={{ marginBottom: '30px' }} /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" style={{ width: '300px', height: '80px', marginBottom: '30px' }} /><br />
            <label htmlFor="return-email">Email Address:</label><br />
            <input id="return-email" type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
