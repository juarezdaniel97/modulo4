
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LineUp from './components/LineUp';
import Tickets from './components/Tickets';
import Footer from './components/Footer';


function App() {

  return (
    <>
        <div className="min-h-screen bg-black text-white">
          <NavBar />
          <Hero />
          <LineUp />
          <Tickets/>
          <Footer />
      </div>
      
    </>
  );
}

export default App;
