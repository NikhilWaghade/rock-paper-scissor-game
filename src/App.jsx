import {BrowserRouter, Routes, Route, Form} from 'react-router-dom';
import Game from './Game';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {


  return (
    <>
       <BrowserRouter>
           
           <Routes>

             <Route path='/' element={<Game/>} /> 

           </Routes>
        </BrowserRouter>  
    
    </>
  )
}

export default App
