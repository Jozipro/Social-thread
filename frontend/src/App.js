import React, { useState } from "react"; //avec 'rsc' shortcut
import Thread from "./components/Thread";
import NewPost from "./components/NewPost";

const App = () => {
  const [userId, setUserId] = useState("");

  return (
    <div>
      <div className="app-container">
        <div className="login">
          <h3>Bonjour</h3>

          <input
            type="text"
            placeholder="Pseudo"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <NewPost userId={UserId} />
        <Thread userId={UserId} />
      </div>
    </div>
  );
};

export default App;
