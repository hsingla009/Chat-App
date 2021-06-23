// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/chat";
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Chat} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </div>{" "}
    </Router>
  );
}

export default App;
