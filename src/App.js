import React, { useEffect, useState } from "react";
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from "./firebase_config";
import firebase from "firebase/compat/app";
import TuduItem from "./Tudu";

function App() {
  const [tudus, setTudus] = useState([])
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, [])

  function getTodos() {
    db.collection("tudus").onSnapshot(function (querySnapshot) {
      setTudus(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          inProgress: doc.data().inProgress,
          tudu: doc.data().tudu,
        }))
      )
    })
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("tudus").add({
      inProgress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      tudu: todoInput,
    });
    setTodoInput("")
  }

  return (
    <div>
      <div className="heading-wrap inner-wrap">
        <h1 className="heading">TUDU APP ✨</h1>
      </div>
      <div className="input-wrap">
        <form>
          <TextField
            id="standard-basic"
            label="Add a Todo"
            variant="standard"
            style={{ color: "#fff", width: window.innerWidth < 425 ? '380px' : '600px' }}
            onChange={(e) => setTodoInput(e.target.value)} value={todoInput} />
          <Button type="submit" variant="contained" onClick={addTodo} style={{ display: "none" }}>Add Tudu</Button>
        </form>

        {tudus.map((tudu) => (
          <TuduItem
            tudu={tudu.tudu}
            inProgress={tudu.inProgress}
            id={tudu.id}
            key={tudu.id} />
        ))}
      </div>
    </div>
  );
}

export default App;