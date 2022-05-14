import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rutas from './routes/Rutas';
import GlobalProvider from './context/GlobalProvider';

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
