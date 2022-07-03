import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
// import Home from "./routes/home/home.component";
const Home = lazy(() => import('./routes/home/home.component'));
const SignIn = lazy(() => import('./routes/sign-in/sign-in.component'));

const App = () => {
  return (
    <Suspense fallback="loading...." >
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
