import { useState } from "react";
import "./Todo.scss";
const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const storeg = localStorage.getItem("erray");
    return storeg ? JSON.parse(storeg) : [];
  });
  const [nTodo, setNtodo] = useState("");
  const [nTodo1, setNtodo1] = useState("");
  const [nTodo2, setNtodo2] = useState("");
  const [nTodo3, setNtodo3] = useState("");
  const [formAdd, setFormAdd] = useState(false);
  const eventCHange = (e) => {
    setNtodo(e.target.value);
  };
  const eventCHange1 = (e) => {
    setNtodo1(e.target.value);
  };
  const eventCHange2 = (e) => {
    setNtodo2(e.target.value);
  };
  const eventCHange3 = (e) => {
    setNtodo3(e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    if (!nTodo.trim() && nTodo1.trim() && nTodo3.trim() !== nTodo2.trim())
      return;
    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: nTodo,
        email: nTodo1,
        password: nTodo2,
        conPassword: nTodo3,
      },
    ]);
    setNtodo("");
    setNtodo1("");
    setNtodo2("");
    setNtodo3("");
  };
  localStorage.setItem("erray", JSON.stringify(todo));
  const delFun = (id) => {
    const deleteUp = todo.filter((el) => el.id !== id);
    setTodo(deleteUp);
  };
  const formbtn = () => {
    setFormAdd(!formAdd);
  };

  return (
    <div className="container pt-5">
      <h1 className="title">ToDo list</h1>
      <button onClick={formbtn} className="form__add">
        form Add
      </button>
      <form
        onSubmit={submitFun}
        className={`${formAdd ? "d-block form" : "d-none "} `}
      >
        <input
          className=""
          name="firstName"
          placeholder="First Name"
          type="text"
          value={nTodo}
          onChange={eventCHange}
        />
        <input
          className=""
          name="email"
          onChange={eventCHange1}
          value={nTodo1}
          placeholder="Email"
          type="email"
        />
        <input
          className=""
          onChange={eventCHange2}
          value={nTodo2}
          name="password"
          placeholder="Password"
          type="password"
        />
        <input
          className=""
          onChange={eventCHange3}
          value={nTodo3}
          name="conpassword"
          placeholder="Conform Password"
          type="password"
        />
        <button className="form__btn">Add</button>
      </form>

      <div className="">
        {todo.map((element) => (
          <div className="" key={element.id}>
            <p className="text-center row__item">{element.text}</p>
            <a className="">{element.email}</a>
            <h3 className="text-center row__item">{element.conPassword}</h3>
            <h2 className="text-center row__item">{element.password}</h2>
            <h1 className="text-center row__item">author:Xasan</h1>
            <button className=" row__btn" onClick={() => delFun(element.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
