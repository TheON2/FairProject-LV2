import styled from "styled-components";

const Container = styled.div`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  height: 500px;
`;

const Container2 = styled.div`
  background-color: white;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  width: 700%;
  height: 50%;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: darkslategray;
  color: white;
  font-weight: 700;
  font-size: 17px;
  border: 0;
  border-radius: 13px;
  cursor: pointer;
`;

export { Container, Container2, StyledButton };
