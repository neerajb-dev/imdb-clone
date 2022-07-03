import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';
const LazyHome = React.lazy(() => import('./routes/home/home.component'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<LazyHome />} />
        <Route path='sign-in' element={
          <React.Suspense fallback="Loading....">
            <SignIn />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
