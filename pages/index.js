import Login from "./../component/login";
import NavBar from "../component/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Login />
    </div>
  );
}
