//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React Router
import { Routes, Route } from 'react-router-dom';

//Páginas
import Cards from './paginas/cards/Cards';
import Info from './paginas/info/Info';
import Header from './components/header/Header'

function App() {
  

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={ <Cards /> } />
        <Route path='/info/:id' element={ <Info />} />
      </Routes>
    </>
  )
}

export default App
