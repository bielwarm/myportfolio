import { useEffect, useState } from 'react';
import '../App.css';
import AboutMe from './AboutMe';
import HeaderLinks from './Header/HeaderLinksBox';
import Work from './Work/Work';
import ContactForm from './Contact/ContactForm';

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [aboutMeHeight, setAboutMeHeight] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);
  // const [contactHeight, setContactHeight] = useState(0);

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

  const headerStyle = windowWidth <= 768 ?
    { fontSize: "22px", letterSpacing: "0.8px" } :
    { fontSize: "32px", letterSpacing: "1px" };

  const subHeaderStyle = windowWidth <= 768 ?
    { fontSize: "0.40em", letterSpacing: "1.6px" } :
    { fontSize: "0.55em", letterSpacing: "2px" };

  return (
    <div className="App">

      <div className="header">
        <div className='font-montserrat' style={{ ...headerStyle, borderTop: "0.5px solid white", borderBottom: "0.5px solid white" }}>
          G_W<span style={subHeaderStyle}>.dev</span>
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

        <ContactForm windowHeight={windowHeight} />
      </div>
    </div>
  );
}

export default App;
