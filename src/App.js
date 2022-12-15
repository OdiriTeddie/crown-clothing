import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/signin/sign-in.component';

import Home from "./routes/home/home.component";





const Shop = () => {
  return(
    <div> <h1>Shopping goods items</h1></div>
  )
}


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<Signin/>} />
      </Route>
  
    </Routes>

  );
}

export default App;
