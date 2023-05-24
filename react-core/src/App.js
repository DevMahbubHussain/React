
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Nav from './components/Nav';
import Users from './pages/Users';
import AddBlog from './pages/AddBlog';
import { Suspense, useState } from 'react';
import Protected from './Routes/Protected';
import Cards from './components/Cards';
import Signup from './components/Signup';
import Post from './APICALLING/Fetch/Post';

function App() {
  const [isLogedin, SetLogedin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Nav />
        {isLogedin ? (
          <button
            onClick={() => {
              SetLogedin(!isLogedin);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              SetLogedin(!isLogedin);
            }}
          >
            Log In
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/add-blog"
            element={
              <Protected isLogedin={isLogedin}>
                <AddBlog></AddBlog>
              </Protected>
            }
          ></Route>
          <Route path="/blog/:title" element={<Blogs />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/post"
            element={
              <Suspense fallback={<h2>Data Loading</h2>}>
                <Post />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
