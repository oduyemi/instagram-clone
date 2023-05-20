import './App.css';
import Navigation from './navigation';
import { Bio } from './components/Bio';
import { Gallery } from './components/Gallery';


const App = () => {
  return (
    <>
      <Navigation />  
      <div className="container">
        <Bio />
      </div>
      <div>
        <Gallery />
      </div>
    </>
  );
}

export default App;
