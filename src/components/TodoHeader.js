import { Container } from "../styles";

export const TodoHeader = ({ title, stack }) => {
  return (
    <Container>
      <div>{title}</div>
      <div>{stack}</div>
    </Container>
  );
};
