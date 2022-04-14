import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import About from './component/About';
import Index from './component/Index';
import Resume from './component/Resume';
import ContactUs from './component/ContactUs';
import Nested from './component/Nested';
import ErrorPage from './component/ErrorPage'
import NestedPage from './component/nested/NestedPage';
import NestedCategory from './component/nested/NestedCategory';
import UseNavigate from './component/UseNavigate';
import Login from './component/auth/Login';
import Protected from './component/auth/Protected';
import AnotherProtected from './component/auth/AnotherProtected';
import { AuthProvider } from './component/auth/AuthProvider';
import RequireAuth from './component/auth/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index/>} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={<Resume />} />
            <Route path='contactus' element={<ContactUs />} />

            <Route path='nested' element={<Nested />}>
              <Route path='page1' element={<NestedPage />} />
              <Route path=':category' element={<NestedCategory/>} />
            </Route>

            <Route path='useNavigate' element={<UseNavigate />} />
            
            <Route path='login' element={ <Login/>} />
            <Route path='protected' element={<RequireAuth><Protected/></RequireAuth>} />
            <Route path='another-protected' element={<RequireAuth><AnotherProtected/></RequireAuth>} />

            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
        </div>
      </AuthProvider>
  );
}

export default App;
