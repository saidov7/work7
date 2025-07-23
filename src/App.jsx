import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const name = useRef();
  const email = useRef();
  const age = useRef();

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com" },
  ]);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.current.value || !email.current.value || !age.current.value) return;

    setUsers((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: name.current.value,
        email: email.current.value,
        age: age.current.value,
      },
    ]);

    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
  };

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <label>Name</label>
          <input type="text" ref={name} />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" ref={email} />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input type="number" ref={age} />
        </div>
        <button type="submit" className="add-btn">Add User</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Email: </strong> {user.email}</p>
            <p><strong>Age: </strong> {user.age}</p>
            <button onClick={() => handleDelete(user.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
