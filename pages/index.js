import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import App from "./App/Search";
import React from "react";

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

  const [links, setLinks] = useState([
    { url: "about", title: "About" },
    { url: "main", title: "Main" },
    { url: "contacts", title: "Contacts" },
  ]);

  return (
    <>
      <Header links={links} />
      <Main products={products} setProducts={setProducts} />
      <Footer />
    </>
  );
};

export default MainPage;
