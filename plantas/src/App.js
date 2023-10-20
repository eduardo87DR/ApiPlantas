import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header';
import Album from './page/album';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Album/>
      <Footer/>
    </div>
  );
}

export default App;
