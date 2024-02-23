import { Suspense } from 'react';
import { useCookies } from 'react-cookie';
import { Routes } from 'react-router';
import { Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/common/Login';
import NotFound from './components/common/NotFound';
import ProtectedRoute from './components/common/ProtectedRoute';
import Category from './components/investment/Category';
import Detail from './components/investment/Detail';
import Investment from './components/investment/Investment';
import Product from './components/investment/Product';
import Question from './components/investment/Question';

function App() {
  const cookies = useCookies(['usrId']);

  return (
    <Router>
      <Suspense
        fallback={<span className="loading loading-spinner text-primary"></span>}
      >
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route
            path='/invest'
            element={
              <ProtectedRoute
                redirectPath='/'
                usrId={cookies[0].usrId}
              >
                <Investment />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/product'
            element={
              <ProtectedRoute
                redirectPath='/'
                usrId={cookies[0].usrId}
              >
                <Product />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/question'
            element={
              <ProtectedRoute
                redirectPath='/'
                usrId={cookies[0].usrId}
              >
                <Question />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/category'
            element={
              <ProtectedRoute
                redirectPath='/'
                usrId={cookies[0].usrId}
              >
                <Category />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/detail/:id'
            element={
              <ProtectedRoute
                redirectPath='/'
                usrId={cookies[0].usrId}
              >
                <Detail />
              </ProtectedRoute>
            }></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Suspense >
    </Router>
  )
}

export default App
