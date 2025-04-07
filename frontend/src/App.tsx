 
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import {Blogs} from "./pages/Blogs"
import {Publish} from "./pages/Publish"
import  Home from "./components/Home"
import { Signin } from './pages/SIgnin'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={  
        localStorage.getItem("token") ? <Blogs /> : <Signin/>
      } />
      <Route path="/blog/:id" element={
        localStorage.getItem("token") ? <Blog /> : <Signin/>
      } />
      <Route path="/blogs" element={
        localStorage.getItem("token") ? <Blogs /> : <Signin />
      } />
      <Route path="/publish" element={
        localStorage.getItem("token") ? <Publish /> : <Signin />
      } />
       
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
