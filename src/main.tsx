import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import Gigs from './pages/Gigs/index.tsx';
import Gig from './pages/Gig/index.tsx';
import Orders from './pages/Orders/index.tsx';
import Login from './pages/Login/index.tsx';
import MyGigs from './pages/MyGigs/index.tsx';
import Messages from './pages/Messages/index.tsx';
import Message from './pages/Message/index.tsx';
import Add from './pages/Add/index.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>} />
      <Route path='/gigs' element={<Gigs/>}/>
      <Route path='/gig/:id' element={<Gig/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/myGigs' element={<MyGigs/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/add' element={<Add/>}/>

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
