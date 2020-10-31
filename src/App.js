import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Route exact path="/" component={ DogsListContainer} />
    </main>
  );
}

export default App;
