import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Container, Container2, StyledButton} from "./style";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {todos} = useSelector((state) => state.todos)
  const todo = todos.find((todo) => todo.id === Number(params.id))

  useEffect(() => {
    if (todo.length <= 0 || todo.length > 1) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <div>
        <div className="sc-dkzDqf gIyIMD">
          <StyledButton className="sc-jSMfEi dcERit" onClick={handleButtonClick}>이전으로</StyledButton>
          <h2>ID : {todo?.id}</h2>
        </div>
        <h1>{todo?.title}</h1>
        <Container2>{todo?.content}</Container2>
      </div>
    </Container>
  )
}

export default Detail
