import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.innercontainer}>
        <p className={styles.slogan}>
          Floater places<br></br> to swim
        </p>

        <h4 className={styles.linkheading}>Link</h4>
        <div className={styles.linkcontainer}>
          <ul>
            <li className={styles.linkitemli}>
              <Link to="/" className={styles.linkitem}>
                Home
              </Link>
            </li>
          </ul>
          <ul className={styles.linkitemul}>
            <li className={styles.linkitemli}>
              <Link to="/about" className={styles.linkitem}>
                About
              </Link>
            </li>
          </ul>
          <ul className={styles.linkitemul}>
            <li className={styles.linkitemli}>
              <Link to="/terms" className={styles.linkitem}>
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactcontainer}>
          <h4 className={styles.contactheading}>Contact Us</h4>
          <p className={styles.contactaddress}>
            Team2projectphase,<br></br> Manchester st, Manchester M60 BRR
            <br></br>
            Phone: 07123456789<br></br>
            E-Mail:{" "}
            <a
              className={styles.atag}
              href="mailto:team2projectphase@gmail.com"
            >
              team2projectphase@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
