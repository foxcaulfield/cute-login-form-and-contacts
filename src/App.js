import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        {/* <header className="App-header">CUTE LOGIN FORM</header> */}
        <Route path={"/login"} render={() => <Login />} />
        <Route path={"/contacts"} render={() => <Contacts />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
