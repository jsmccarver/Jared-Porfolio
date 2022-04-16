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
      Programs: [
        { name: "Django" },
        { name: "HTML5" },
        { name: "Postgres" },
        { name: "AWS S3" },
      ],
      Color: "#0f182b",
      TextColor: "honeydew",
      img: "./freeman-pets.png",
      Description:
        "Forum created in Django using AWS S3 buckets to share your pets and display foster pets available for adoption. The database is PostgreSQL and the app is hosted on Heroku.",
    },
    {
      Name: "Reddit Clone",
      Link: "https://reddit-clone-rho-liart.vercel.app/",
      Programs: [
        { name: "React" },
        { name: "Next JS" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "TypeORM" },
        { name: "GraphQL" },
        { name: "Docker" },
        { name: "Node" },
        { name: "Express" },
      ],
      Color: "#edf2fb",
      TextColor: "black",
      img: "./Reddit.png",
      Description:
        "Reddit Clone built in Next js based of tutorial by Ben Awad. Front end is hosted on Vercel. Backend is hosted on a digital ocean droplet that utilizes Dokku and Docker Containers.",
    },
    {
      Name: "Jared McCarver",
      Link: "https://jmccarver.com/",
      Programs: [{ name: "React" }, { name: "Next JS" }],
      Color: "#eddcd2",
      TextColor: "black",
      img: "./Jared_site.png",
      Description:
        "This is my personal webpage. I created it using React and Next JS to showcase my skills in the design and development of Full-Stack and Front-End apps.",
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
                <Link href="/projects">
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
          <div id="contact" className={`${Styles.chat} ${Styles.BriefIntro}`}>
            <h1>Let's Chat</h1>
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
