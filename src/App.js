import './App.css';
import './index.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import Aside from './components/Aside.jsx';

export default function App() {
  return (
    <body>
      <Header />
      <Nav />
      <main className='main-container'>             
        <Main />
        <Aside /> 
      </main>     
      <Footer />
    </body>
  );
}


