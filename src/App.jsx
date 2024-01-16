
import './App.css';
import Doctorslist from './Components/Doctorslist';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import ViewDoctors from './Components/ViewDoctors';




function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Doctorslist/>}/>
           
            <Route path='/doctors/View/:id' element={<ViewDoctors/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer></Footer>

    </>
  );
}

export default App;
