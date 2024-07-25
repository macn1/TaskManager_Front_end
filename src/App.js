import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Add from "./components/Add";
import Home from "./components/Home";

import Navbar from "./components/Navbar";


import{BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
//

<>

<BrowserRouter>
<Navbar>

</Navbar>

  <Routes>   <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Add/>}/>

 
 </Routes>
  </BrowserRouter>

</>
  );
}

export default App;
