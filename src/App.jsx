
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import First from './Components/First'
import AllProject from './Components/AllProject'
import ErrorPage from './Components/ErrorPage'


function App() {

  return (
    <>
    
    <BrowserRouter>
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
