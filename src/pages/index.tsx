import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
// import { useSession, signIn, signOut } from "next-auth/react";
import { LoginBtn } from "../components/LoginBtn";

const Home: NextPage = () => {
  // const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <h1>Next auth test</h1>
      <LoginBtn />
    </div>
  );
};

export default Home;
