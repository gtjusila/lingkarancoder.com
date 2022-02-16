import './App.css';
import Connection from './sections/Connection';
import Hero from './sections/Hero.js';
import Register from './sections/Register';
import Services from './sections/Services';
import Steps from './sections/Steps';
function App() {
  return (
    <div className='font-sans text-blue-hero'>
      <Hero />
      <Services />
      <Steps />
      <Connection />
      <Register />
      <div className=''></div>
    </div>
  );
}

export default App;
