import Header from './components/Header';
import Movie from './components/Movie';
import movies from './data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((element, index) => {
             return (
             <Movie 
             key={index}
             title={element.Title}
             year={element.Year} 
             img={element.Poster}
             />
             )
          })
        }
      </div>
    </div>
  );
}

export default App;
