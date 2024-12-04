import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import App from "./App/Search"

const MainPage = () => {
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);

    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main products={products} setProducts={setProducts} />
      <Footer />
    </>
  );
};

export default MainPage;
