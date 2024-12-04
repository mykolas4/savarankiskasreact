import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";


const Card = ({ title, description, rating, count, imgUrl }) => {
    
  const [isTitleVisible, setTitleVisible] = useState(false);


  return (
    <div className="card">
    <img src={imgUrl} alt={title} className="image" />
    <h2 className="title">{title}</h2>
    <p className="description"><b>The products are of high quality</b>{description}</p>
    <div className="card-footer">
  <span className="rating">Rating: {rating?.rate ?? 'N/A'}</span>
  <span className="count">Count: {count?.count ?? 0}</span>
</div>
    </div>
  

  );
};

export default Card;

