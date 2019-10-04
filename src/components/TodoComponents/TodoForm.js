import React from "react";
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button onClick={props.handleAddTodo}>Add Item</button>
      <button onClick={props.handleClearTodos}>Clear Completed Items</button>
    </form>
  );
};

export default TodoForm;
