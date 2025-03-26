import logo from './logo.svg';
import './App.css';
import Gallery from './Components/Gallery';
import JsxCurlyBrace from './Components/JsxCurlyBrace.js';
import TodoList from './Components/TodoList.js';
import Home from './Components/Home.js';
import ConRendering from './Components/ConRendering.js';
import ReadingProps from './Components/ReadingProps.js';
import Signup from './Components/Signup.js';
import Gallerytwo from './Components/Gallerytwo.js';

function App() {
  return (
    <div className="App">
     <Gallery/>
     <JsxCurlyBrace/>
     <TodoList/>
     <Home name="Rifat" game="coding"/>
     <ConRendering/>
     <ReadingProps/>
     <Signup/>
     <Gallerytwo/>
    </div>
  );
}

export default App;
