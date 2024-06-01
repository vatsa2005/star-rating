import './App.css';
import Stars from './Components/Stars';

function App() {
  return (
    <div className="App">
      <Stars noOfStars={5} size={50} color="white" clickColor="yellow" text={true} textColor="white" fontSize={20}/>
    </div>
  );
}

export default App;
