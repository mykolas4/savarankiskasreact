import Card from "../Card/Card";
import styles from "./styles.module.css";


const Main = ({ products, setProducts }) => {
  const removeCard = (id) => {
    const filteredCards = products.filter((s) => s.id !== id);
    setProducts(filteredCards);
  };
  return (
    <div className={styles.main}>
      {products ? (
        products.map((d) => {
          return (
            <Card
              title={d.title}
              description={d.description}
              rating={d.rating}
              count={d.count}
              imgUrl={d.image}
            />
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Main;
