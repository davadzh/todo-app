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
          <Route path={"/todo-app/mytodos"} exact render={() => <MyTodos />} />
          <Route path={"/todo-app/mytodos/:id"} exact render={() => <Todo />} />
          <Route path={"/todo-app/new"} exact render={() => <NewTodo />} />
          <Route path={"/todo-app/author"} exact render={() => <Author />} />
          <Route path={"/todo-app/"} exact render={() => <Home />} />
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
