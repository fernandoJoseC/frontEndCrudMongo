
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Create from "./Create"
import CreateSeries from './CreateSeries';


function App() {
  return (
    <div className="main">
      <div class='container'>
        <div>
          <h2>
            CRUD con ReactJS
          </h2>
        </div>
        <div>
          <div class="peliculas">
            <h1>Aniadir peliculas</h1>
            <Create />
          </div>
          <br />
          <div class="series">
            <h1>Aniadir series</h1>
            <CreateSeries />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
