import { useDispatch } from "react-redux";
import { Form } from "./AddForm.styles";
import { useRef } from "react";
import { addTodos } from "redux/reducers/todos";
import useInput from "hooks/useInput";
import { Button, Input, InputGroup, Label } from "styles";

export const AddForm = () => {
  const [title, handleTitleInput, setTitle] = useInput();
  const [content, handleContentInput, setContent] = useInput();

  const dispatch = useDispatch();

  const titleRef = useRef(null);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("The field should be filled");
      return;
    }
    dispatch(
      addTodos({
        id: Number(new Date()),
        title,
        content,
        done: false,
      })
    );
    setTitle("");
    setContent("");
    titleRef.current.focus();
  };

  return (
    <Form>
      <InputGroup>
        <Label>제목</Label>
        <Input
          type="text"
          value={title}
          ref={titleRef}
          onChange={handleTitleInput}
        />
        <Label>내용</Label>
        <Input type="text" value={content} onChange={handleContentInput} />
        <Button onClick={handleAddButtonClick}>ADD</Button>
      </InputGroup>
    </Form>
  );
};
