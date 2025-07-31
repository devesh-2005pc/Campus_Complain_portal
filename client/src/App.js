import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import PostDetails from "./components/Posts/PostDetails/PostDetails.js";
import Auth from "./components/Auth/Auth.js";
import AdminAuth from "./components/Auth/AdminAuth.js";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.js";

import { getPosts } from "./actions/post";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" render={() => (
          user ? <Posts setCurrentId={setCurrentId} /> : <Redirect to="/auth" />
        )} />
        <Route exact path="/create" render={() => (
          user ? <Form setCurrentId={setCurrentId} /> : <Redirect to="/auth" />
        )} />
        <Route exact path="/details/:id" component={PostDetails} />

        <Route exact path="/auth" component={Auth} />
        
        <Route exact path="/auth/admin" render={() => (
          user && user.result.isAdmin ? <AdminAuth /> : <Redirect to="/" />
        )} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
