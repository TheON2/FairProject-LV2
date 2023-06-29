import { AddForm, TodoHeader, TodosList } from "components";
import { GlobalStyle, Layout } from "../../styles";
import React from "react";
import { useSelector } from "react-redux";

export const Main = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div id="root">
      <GlobalStyle />
      <Layout>
        <TodoHeader title="Todo-List" stack="React" />
        <AddForm />
        <TodosList todos={todos} />
      </Layout>
    </div>
  );
};
