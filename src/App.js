import React from "react";
import "./style/App.scss";
import NavBar from "./components/elements/NavBar";
import AllPosts from "./components/posts/AllPosts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AddContact from "./components/contacts/AddContact";
// import EditContact  from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={AllPosts} />
                {/* <Route exact path="/post/add" component={AddContact} /> */}
                {/* <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                /> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );

}

export default App;
