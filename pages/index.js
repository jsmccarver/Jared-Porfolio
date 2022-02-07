import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Link from "next/link";
import WorkFromHome from "../Components/Work_Home";
import ProjectList from "../Components/ProjectsList";
export default function Home() {
  const Projects = [
    {
      Name: "Freeman Pet Shop",
      Link: "https://freemanpets.com",
      img: "./Allyson_site_thumb.png",
      description:
        "Simple CRUD forum built in Django to share posts about your pets. Includes adoptions section.",
    },
    {
      Name: "Jared McCarver",
      Link: "https://allysonfreeman.com/",
      img: "./jared_site_thumb.png",
      description:
        "Personal porfolio built using React and Next JS. Icon and landing image made by Allyson Freeman",
    },
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      img: "./Allyson_site_thumb.png",
      description:
        "Allyson Freeman GIS Porfolio built in Next that integrates with ESRI API",
    },
  ];
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
                <WorkFromHome />
              </div>
            </div>
          </div>
          <div className={Styles.BriefIntro}>
            <h1>A Little About Me.</h1>
            <h3>
              My Name is Jared McCarver. I am a recent graduate of NC State in
              Electrical and Computer Engineering. I currently work at Stewart
              Engineers where I am developing a web app to automate Glass
              Coatings. In my spare time, I love bowling, reading fantasy and
              history books, and spending time with my 3 cats.
            </h3>
          </div>
          <div className={Styles.FeaturedProjects}>
            <h1>Featured Projects</h1>
            <ProjectList projects={Projects} />
            <button>All Projects</button>
          </div>
          <div className={`${Styles.chat} ${Styles.BriefIntro}`}>
            <h1>Lets Chat</h1>
            <p>
              Do not hesitate to contact me about any inquries or concerns you
              may have. I am always ready to talk!
            </p>
            <div>
              <Link href="./Jared McCarver Resume.pdf">
                <button>Resume</button>
              </Link>
              <button href={"mailto:jared.mccarver@gmail.com"}>Email Me</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
