import { useState } from "react";
import axios from "axios";

export default function CreateArticle() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    user_id: 1,
  });

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitArticle = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/articles/", form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>Créer un article</h1>
      <form onSubmit={submitArticle}>
        <label>Titre de l&apos;article :</label>
        <input type="text" name="title" onChange={handleChangeForm} />
        <label>Contenu de l&apos;article :</label>
        <textarea name="content" onChange={handleChangeForm} />
        <input type="submit" />
      </form>
    </>
  );
}
