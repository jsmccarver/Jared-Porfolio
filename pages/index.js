import Head from "next/head";
import Styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
          <div className={Styles.projects}>
            <div>
              <h1>My Projects</h1>
            </div>
            <div className={`${Styles.works} grid`}>
              <div className={Styles.description}>
                <h2>Allyson Freeman</h2>
                <a href="https://allysonfreeman.com/"> allysonfreeman.com</a>
                <p>
                  I was the developer for Allyson&apos;s personal website. She
                  is a graduate of NC State with a Bachelors in Geology. She is
                  currently pursuing a certificate in Geospatial Information
                  Systems from NC State and does research with The Machado Lab.
                  You can find out more through the link. The project is written
                  in React JS.
                </p>
              </div>
              <div className={Styles["example-images"]}>
                <img src={"./Allyson_site.jpg"} />
                <img src={"./Allyson_site_mobile.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
