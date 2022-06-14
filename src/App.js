import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import Register from './components/Register'
import ShowRegistration from './components/ShowRegistration';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShowAllRegistrations from './components/ShowAllRegistrations';
import EditUser from './components/EditUser';
import SearchEmail from './components/SearchEmail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          {/* <Register /> */}
          <Routes>
              <Route path='/' element={<Register/>}/>
              <Route path='/allUsers' element={<ShowAllRegistrations/>}/>
              <Route path='/searchEmail' element={<SearchEmail/>}/>
              <Route path='/editUser' element={<EditUser/>}/>

          </Routes>
        </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
