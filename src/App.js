import { MathJaxContext } from "better-react-mathjax";
import './App.css';
import Questions from './Components/Questions';

function App() {
  return (
    <MathJaxContext>
      <div className="flex items-center h-screen justify-center">
        <Questions />
      </div>
    </MathJaxContext>

  );
}

export default App;
