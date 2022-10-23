import React from "react";
import Button from '@mui/material/Button';
import { db } from "./firebase_config";

function TuduItem({tudu, inProgress, id}) {

  function toggleInProgress() {
    db.collection("tudus").doc(id).update({
      inProgress: !inProgress,
    })
  }

  function deleteTodo() {
    db.collection("tudus").doc(id).delete();
  }

  return (
    <>
      <div className="tudu-wrap main-wrap" key={id}>
        {/* tudu content */}
        <div className="tudu-item main-wrap" key={id}>
          <p className="content" key={id}>{tudu}</p>
        </div>

        {/* tudu details */}
        <div className="detail-wrap main-wrap">
          <p className="status" ><b>Status: </b>{inProgress ? 'Incomplete' : 'Completed'}</p>
          <div className="btn-wrap">
            <Button type="submit" style={{ backgroundColor: "#32bd7d", marginRight: "10px" }} variant="contained" color="error" onClick={toggleInProgress} >Mark Completed</Button>
            <Button type="submit" style={{ backgroundColor: "#ff6085" }} variant="contained" color="error" onClick={deleteTodo} >Delete Tudu</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TuduItem;