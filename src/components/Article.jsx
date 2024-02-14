/* eslint-disable react/prop-types */

import axios from "axios";

export default function Article({ article, refreshPage }) {
  const deleteArticle = () => {
    axios
      .delete(`http://localhost:8000/articles/${article.id}`)
      .then(() => refreshPage())
      .catch((error) => console.error(error));
  };

  return (
    <article>
      <h3>{article.title}</h3>
      <h5>{article.username}</h5>
      <p>{article.content}</p>
      <button onClick={deleteArticle}>Supprimer article</button>
    </article>
  );
}
