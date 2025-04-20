import Home  from './components/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Blogs } from './pages/Blogs';
import { Signin } from './pages/SIgnin';
import { Blog } from './pages/Blog';
import { Publish } from './pages/Publish';
import TrackingInitializer from './components/TrackingInitializer';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  // Add this useEffect to handle auth state changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
      <BrowserRouter>
      <TrackingInitializer />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={  
            isAuthenticated ? <Blogs /> : <Signin setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/blog/:id" element={
            isAuthenticated ? <Blog /> : <Signin setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/blogs" element={
            isAuthenticated ? <Blogs /> : <Signin setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/publish" element={
            isAuthenticated ? <Publish /> : <Signin setIsAuthenticated={setIsAuthenticated} />
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;