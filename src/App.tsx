import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import UserLocation from './Pages/UserLocation/UserLocation';
import Weather from './Pages/Weather/Weather';
import ToDoList from './Pages/ToDoList/ToDoList';


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlocation" element={<UserLocation />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDoList />} />
    </Routes>

    </>
  )
}

export default App
