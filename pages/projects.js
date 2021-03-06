import Styles from "../styles/ProjectList.module.css";

const ProjectList = () => {
  const Projects = [
    {
      Name: "Reddit Clone",
      Link: "https://www.jmccarver-reddit-clone.com/",
      Link2: "https://github.com/jsmccarver/Reddit-Clone",
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
      Name: "Freeman Pet Shop",
      Link: "https://freemanpets.com",
      Link2: "https://github.com/jsmccarver/petstore",
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
      Name: "Jared McCarver",
      Link: "https://jmccarver.com/",
      Link2: "https://github.com/jsmccarver/Jared-Porfolio",
      Programs: [{ name: "React" }, { name: "Next JS" }],
      Color: "#eddcd2",
      TextColor: "black",
      img: "./Jared_site.png",
      Description:
        "This is my personal webpage. I created it using React and Next JS to showcase my skills in the design and development of Full-Stack and Front-End apps.",
    },
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      Link2: "https://github.com/jsmccarver/AllysonsWebsite",
      Programs: [{ name: "React" }, { name: "Next JS" }],
      Color: "white",
      TextColor: "black",
      img: "./Allyson_site.jpg",
      Description:
        "I was the developer for Allyson's personal website. She is a graduate of NC State with a Bachelors in Geology. She is currently pursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. ",
    },
  ];
  return (
    <div className={Styles.projects}>
      <h1>Projects.</h1>
      <h3>
        A collection of my featured projects utilizing Front-End and Back-End
        Technolgies.
      </h3>
      {Projects.map((Project) => (
        <section
          key={Project.Name}
          className={Styles.Project}
          style={{ backgroundColor: Project.Color }}
        >
          <div className={Styles.ProjectWrapper}>
            <div className={Styles.description}>
              <h2 style={{ color: Project.TextColor }}>{Project.Name}</h2>

              <ul className={Styles.Programs}>
                {Project.Programs.map((Program) => (
                  <li
                    key={Program.name}
                    style={{
                      color: Project.TextColor,
                      borderColor: Project.TextColor,
                    }}
                  >
                    {Program.name}
                  </li>
                ))}
              </ul>

              <p style={{ color: Project.TextColor }}>{Project.Description}</p>
              <div className={Styles.links}>
                <a href={Project.Link} style={{ color: Project.TextColor }}>
                  Live Link
                </a>
                <a href={Project.Link2} style={{ color: Project.TextColor }}>
                  GitHub
                </a>
              </div>
            </div>
            <div className={Styles["example-images"]}>
              <img src={Project.img} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
export default ProjectList;
