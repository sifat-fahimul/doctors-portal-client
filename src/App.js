import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointments/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/appointment" element={<PrivetRoute><Appointment></Appointment></PrivetRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivetRoute><Dashboard></Dashboard></PrivetRoute>}>
              <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} >
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>} >
              </Route>
              <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} >
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>} >
              </Route>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login></Login>}>
            </Route>
            <Route exact path="/register" element={<Register></Register>}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
