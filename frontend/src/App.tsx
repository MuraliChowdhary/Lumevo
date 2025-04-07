 
import './App.css'
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import {Blogs} from "./pages/Blogs"
import {Publish} from "./pages/Publish"
import  Home from "./components/Home"
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={
        localStorage.getItem("token") ? <Blogs /> : <Navigate to="/signin" />
      } />
      <Route path="/blog/:id" element={
        localStorage.getItem("token") ? <Blog /> : <Navigate to="/signin" />
      } />
      <Route path="/blogs" element={
        localStorage.getItem("token") ? <Blogs /> : <Navigate to="/signin" />
      } />
      <Route path="/publish" element={
        localStorage.getItem("token") ? <Publish /> : <Navigate to="/signin" />
      } />
       
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
