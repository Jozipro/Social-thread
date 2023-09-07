import React, { useState } from "react";

const NewPost = ({ userId }) => {
  //on destructure et on passe en props
  const [message, setMessage] = useState(""); // récupère le message et on peut le modif avec setMessage

  const handleForm = (e) => {
    e.preventDefault(); // prévient du rafraichissement

    axios.post("http://localhost:5000/post/", { message, author: userId });
    setMessage("");
  };

  return (
    <form className="New-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        onChange={(e) => setMessage(e.target.value)} //onChange récupère évèvenemt e et change la valeur de message avec setMessage
        placeholder="Quoi de neuf ?"
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
