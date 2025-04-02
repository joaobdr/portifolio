import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <section className={`container ${style.section_header}`}>
        <Link href="/" className={style.logo}>
          <h1>Logo</h1>
        </Link>
      </section>
    </header>
  );
};

export default Header;
