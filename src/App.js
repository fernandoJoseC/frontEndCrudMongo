
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
          <Create />
          <br />
          <CreateSeries />
        </div>
      </div>
    </div>
  );
}

export default App;
