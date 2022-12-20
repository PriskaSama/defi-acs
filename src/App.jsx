
import './App.css';
import Competence from './components/sectioncompetence';
import BgImg from './components/imgbackground';
import Portfolio from './components/sectionporfolio';

const App = () => {
  return (
    <>
    <body className='bg-black bg-compet h-screen'>
      
      <Competence />
      <Portfolio />
    <BgImg />
    </body>
    </>
  )
};

export default App;
