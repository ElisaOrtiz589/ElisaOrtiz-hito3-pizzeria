import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
      <div>
        <NavBar/>
        <Home/>
        {/*<Register/>*/}
        {/*<Login/>*/}
        {/*<Cart/>*/}
        
        <Footer/>
      </div>
  )
}

export default App
