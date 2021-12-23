import Head from "next/head";
import Styles from "../styles/Home.module.css";
import ProjectList from "../Components/ProjectList";
export default function Home() {

  return (
    <>
      <Head>
        <title>Jared McCarver - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={Styles.Home}>
          <div className={Styles.Intro}>
            <div className={Styles["code-image"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-11 1l-5 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649zm7 2.201l-5-2.201v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.598z" />
              </svg>
            </div>
            <div className={Styles["Intro-text"]}>
              <h2>Hello!</h2>
              <h3>
                My name is Jared and I am an aspiring web developer. I currently
                work at Stewart Engineers where I am developing a Web App, using
                React JS, to model glass coatings.
              </h3>
            </div>
          </div>
          <ProjectList/>
        </div>
      </main>
    </>
  );
}
