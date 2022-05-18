import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    // COMPONENTS RENDERED TO APP (TO DISPLAY ON WEBSITE)
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      
      
    </>
  );
}

export default App;
