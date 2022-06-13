import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './routes/Rutas';
import GlobalProvider from './context/GlobalProvider';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <GlobalProvider>
          <Rutas/>
      </GlobalProvider>
    </div>
  );
}

export default App;
