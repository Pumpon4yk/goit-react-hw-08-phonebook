import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import {HomePage} from "../page/HomePage"
import {refreshUser} from 'redux/auth/operations'
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const ContactsPage = lazy(() => import('../page/ContactsPage'))
const RegisterPage = lazy(() => import('page/RegisterPage'))
const LoginPage = lazy(() => import('page/LoginPage'))

export default function App() {
  const dispatch =useDispatch()

  useEffect(()=>{
dispatch(refreshUser())
  }, [dispatch])


  return (

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="contacts" element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />

        <Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
      </Route>
    </Routes>

  );
}
