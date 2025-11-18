
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import First from './Components/First'
import AllProject from './Components/AllProject'
import ErrorPage from './Components/ErrorPage'
import { ScrolltoTop } from './Components/ScrollToTop'


function App() {

  return (
    <>
    
    <BrowserRouter>
    <ScrolltoTop/>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/projects' element={<AllProject/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
