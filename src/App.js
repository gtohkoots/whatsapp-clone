import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo192.png';
import { useStateValue } from './StateProvider';

function App() {
  const[{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      { user == null ? (
        <Login />
      ) : (
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <div className='logo_chat'>
                <img src={logo} />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
