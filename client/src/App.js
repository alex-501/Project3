import React, { useEffect } from 'react';import SignUp from './pages/Signup';
import Login from './pages/Login';import Household from './pages/Household';
import Dashboard from './pages/Dashboard';import Chores from './pages/Chores';
import './App.css'; import Navbar from "./components/Navbar";
import Footer from "./components/Footer";import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useChoreContext } from "./utils/GlobalState";import refreshUserData from "./utils/refreshUserData";

function App() {
  const [state, dispatch] = useChoreContext();
  useEffect(() => refreshUserData(dispatch), [dispatch]);
  return (
    <Router>
      <Navbar />
        <div style={{ marginBottom: 50 }}>
          { state.username ?
              <Switch>
                <Redirect exact path={["/", "/login"]} to="/dashboard" />
                <Redirect exact path="/signup" to="/household" />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/household" component={Household} />
                <Route exact path="/chores" component={Chores} />
              </Switch> :
              <Switch>
                <Redirect exact path={["/", "/dashboard", "/household", "/chores"]} to="/login" />
                <Redirect exact path="/" to="/login" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>   }
        </div>
        <Footer/>
    </Router>);}
export default App;
