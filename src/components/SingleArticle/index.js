import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);

  const singleArticle = articles.find((article) => article.id === id);
  console.log(singleArticle);

  return (
    <div className="singleArticle">
      <h1>{singleArticle.title}</h1>
      <img src={`${singleArticle.imageUrl}`} alt="home" />
      <p>{singleArticle.body}</p>
    </div>
  );
};

export default SingleArticle;
