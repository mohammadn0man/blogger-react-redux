import React from "react";
import "./style/App.scss";
import NavBar from "./components/elements/NavBar";
import AllPosts from "./components/posts/AllPosts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./components/posts/AddPost";
import EditPost from "./components/posts/EditPost";
import ViewPost from "./components/posts/ViewPost";

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
                <Route exact path="/post/add" component={AddPost} />
                <Route
                  exact
                  path="/post/edit/:id"
                  component={EditPost}
                />
                <Route
                  exact
                  path="/post/view/:id"
                  component={ViewPost}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );

}

export default App;
