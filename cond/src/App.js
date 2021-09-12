import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/hi">hello</Link>
      <Switch>
        <Route exact path="/hi">
          {/* <MainPage></MainPage> */}
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
function hello(){
  return <h2>Hello world</h2>
}

export default App;
