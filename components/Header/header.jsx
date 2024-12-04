import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.logo}> PRODUCTS SHOP </div>
      <nav></nav>
    </header>
  );
};



const links = [
    { link: "#", title: "#" },
    { link: "#", title: "#" },
    { link: "#", title: "#" },
  ];
  
  <Header links={links} />;
  
  {
    links.map((link) => {
      return (
        <a href={link.link} key={link.title}>
          {link.title}
        </a>
      );
    });
  }
  

  export default Header;