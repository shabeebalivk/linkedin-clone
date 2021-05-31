import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Drawer } from '@material-ui/core';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="container">
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
