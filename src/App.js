import './App.css';
import Header from './component/header/Header';
import About from './component/about/About1';
import Home from './component/home/Home';
import Galary from './component/galary/Galary';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <main className='main'>
      <About />
         <Galary />
         <Contact />
         <Footer />
      </main>
    </>    
  );
}

export default App;
