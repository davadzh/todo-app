import React, { Suspense } from "react";
import Layout from "./components/layout";
import { Switch, Route } from "react-router-dom";
import Author from "./pages/author";
import Home from "./pages/home";
import Todo from "./pages/todo";
import NewTodo from "./pages/newTodo";
import MyTodos from "./pages/mytodos";

//const MyTodos = React.lazy(() => import("./pages/mytodos"));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Layout>
        <Switch>
          <Route path={"/mytodos"} exact render={() => <MyTodos />} />
          <Route path={"/mytodos/:id"} exact render={() => <Todo />} />
          <Route path={"/new"} exact render={() => <NewTodo />} />
          <Route path={"/author"} exact render={() => <Author />} />
          <Route path={"/"} exact render={() => <Home />} />
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
