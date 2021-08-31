import React from 'react';
import Layout from "./components/layout";
import {Switch, Route} from "react-router-dom";
import MyTodos from "./pages/mytodos";
import Author from "./pages/author";
import Home from "./pages/home";
import Todo from "./pages/todo";
import NewTodo from "./pages/newTodo";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path={"/mytodos"} exact render={() => <MyTodos />} />
        <Route path={"/mytodos/:id"} exact render={() => <Todo />} />
        <Route path={"/new"} exact render={() => <NewTodo />} />
        <Route path={"/author"} exact render={() => <Author />} />
        <Route path={"/"} exact render={() => <Home />} />
      </Switch>
    </Layout>
  );
}

export default App;
