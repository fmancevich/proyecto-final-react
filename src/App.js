import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Rutas from './routes/Rutas';

// rafce

const App = () => {
  return (
    <div className="App">
      {/* <Header/>
      <ItemListContainer titulo="lighting .net ... la tienda digital que te ilumina..." />
      <Footer/> */}

      <Rutas/>

    </div>
  );
}

export default App;
