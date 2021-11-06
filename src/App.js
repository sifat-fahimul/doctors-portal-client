import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointments/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivetRoute path="/appointment">
              <Appointment></Appointment>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Router path="/login">
              <Login></Login>
            </Router>
            <Router exact path="/register">
              <Register></Register>
            </Router>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
