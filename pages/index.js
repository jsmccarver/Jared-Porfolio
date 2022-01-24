import Head from "next/head";
import Styles from "../styles/Home.module.css";
import ProjectList from "../Components/ProjectList";
import Link from "next/link";
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
            <div className={Styles["Intro-text"]}>
              <div>
                <h1>I will design and develop your Websites and Apps</h1>
                <h3>
                  Hi, My name is Jared and I am an aspiring web developer. I
                  will work diligently using my skills to build the best website
                  for you!
                </h3>
                <Link href="/#projects">
                  <a>
                    <button>View My Work</button>
                  </a>
                </Link>
              </div>
              <div>
                <img src="./Work_Home.svg"></img>
              </div>
            </div>
          </div>
          <div id="projects">
            <ProjectList />
          </div>
          <div className={Styles.contactwrapper} id="contact">
            <h1>Contact Me</h1>
            <div className={Styles.contact}>
              <div className={Styles.contacttext}>
                <h3>Send Me A Message</h3>
                <p>
                  Do you have an interest in Web Design or are looking to build
                  you own website. Drop me a message and we can set up a time to
                  chat!
                </p>
                <ul>
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#432b8c" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x={4} y={4} width={16} height={16} rx={2} />
        <path d="M4 13h3l3 3h4l3 -3h3" />
      </svg>
                    <h3>jared.mccarver@gmail.com</h3>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#432b8c"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
                      <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
                      <path d="M10 18v.01" />
                    </svg>
                    ); }<h3>+1 801-717-0609</h3>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#432b8c"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                      <line x1={8} y1={7} x2={8} y2="7.01" />
                      <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                      <line x1={16} y1={15} x2={16} y2="15.01" />
                    </svg>
                    <h3>Wake Forest, North Carolina, USA</h3>
                  </li>
                </ul>
              </div>

              <form
                className={Styles.contactform}
                action="https://submit-form.com/QObGMX5B"
              >
                <div className={Styles.contactinputs}>
                  <input
                    type="hidden"
                    name="_redirect"
                    value="https://localhost:3000/thanks"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jared McCarver"
                    required=""
                  />
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required=""
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required=""
                  />
                </div>
                <div className={Styles.messagebox}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please enter your message..."
                    required=""
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className={Styles.button}
                >
                  Send Request &#8594;
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
