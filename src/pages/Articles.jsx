import { useLoaderData } from "react-router-dom";
import Article from "../components/Article";

export default function Articles() {
  const articles = useLoaderData();

  console.info(articles);
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
}
