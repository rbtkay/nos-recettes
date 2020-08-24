import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Nos recettes!</a>
        </h1>

        <p className={styles.description}>
          recipies from all to all 
          {/* {" "} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="/recipie" className={styles.card}>
            <h3>Our recipies &rarr;</h3>
            <p>Check the recipies uploaded by our dearest users</p>
          </a>

          <a href="/recipie/create" className={styles.card}>
            <h3>Contribute ? &rarr;</h3>
            <p>Share with us your sweetest recipies!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  );
}

export async function getServerSideProps({ res }) {
  return { props: {} };
}
