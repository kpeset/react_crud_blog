/* eslint-disable react/prop-types */

export default function Article({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <h5>{article.username}</h5>
      <p>{article.content}</p>
      <button>Supprimer article</button>
    </article>
  );
}
