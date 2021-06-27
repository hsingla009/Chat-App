// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/chat";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  let chatRoute=<Route path="/" exact component={Login} />;
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  if (isLoggedIn) {
    chatRoute = <Route path="/" exact component={Chat} />;
  }
  return (
    <Router>
      <div className="App">
        {chatRoute}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        {/* <Redirect to="/login"></Redirect> */}
      </div>{" "}
    </Router>
  );
}

export default App;
