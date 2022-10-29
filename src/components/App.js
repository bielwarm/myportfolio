import { useEffect, useState } from 'react';
import '../App.css';
import AboutMe from './AboutMe';
import HeaderLinks from './header/HeaderLinksBox';
import Work from './Work';

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowScroll, setWindowScroll] = useState(window.scrollY);

  useEffect(() => {
    const testScroll = () => setWindowScroll(window.scrollY);
    const testHeight = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", testScroll);
    window.addEventListener("resize", testHeight);

    return () => {
      window.removeEventListener("scroll", testScroll);
      window.removeEventListener("resize", testHeight)
    };
  }, []);

  useEffect(() => {
    console.log("window height", windowHeight)
  }, [windowHeight])

  return (
    <div className="App">

      <div className="header">
        <div className='font-montserrat' style={{ fontSize: "32px", borderTop: "0.5px solid white", borderBottom: "0.5px solid white" }}>
          <span style={{ letterSpacing: "1px" }}>G_W<span style={{ fontSize: "0.55em", letterSpacing: "2px" }}>.dev</span></span>
        </div>
        <HeaderLinks windowScroll={windowScroll} windowHeight={windowHeight} />
      </div>

      <div className="main">
        <div id="about-me" style={{ height: windowHeight }}>
          <div style={{ paddingTop: "12rem" }}>
            <AboutMe />
          </div>
        </div>
        {/* Work section total height is 983px (+ padding = 1073px ) */}
        <div id="work" style={{ paddingTop: "90px", minHeight: "983px", height: windowHeight }}>
          <h2 style={{ margin: '0 0 40px', fontSize: "3rem" }}>Work</h2>
          <Work />
        </div>

        <div id="contact" style={{ paddingTop: "90px", height: windowHeight }}>
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
