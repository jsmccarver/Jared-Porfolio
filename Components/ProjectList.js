import Styles from "./styles/ProjectList.module.css";

const ProjectList = () => {
  const Projects = [
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      Programs: [
        { name: "React" },
        { name: "next" },
        { name: "Unsplash API" },
        { name: "Weather API" },
      ],
      Color: "#0f182b ",
      TextColor: "#808782",
      Description:
        "I was the developer for Allyson&apos;s personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
    },
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      Programs: [
        { name: "React" },
        { name: "next" },
        { name: "Unsplash API" },
        { name: "Weather API" },
      ],
      Color: "#eddcd2",
      TextColor: "#7E7F9A",
      Description:
        "I was the developer for Allyson&apos;s personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
    },
    {
      Name: "Weather App",
      Link: "https://jmccarver.com/proje",
      Programs: [
        { name: "React" },
        { name: "next" },
        { name: "Unsplash API" },
        { name: "Weather API" },
      ],
      Color: "#edf2fb",
      TextColor: "#89608E",
      Description:
        "I was the developer for Allyson&apos;s personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
    },
  ];
  return (
    <div className={Styles.projects}>
      <h1>My Projects</h1>
      {Projects.map((Project) => (
        <section
          className={Styles.Project}
          style={{ backgroundColor: Project.Color }}
        >
          <div className={Styles.ProjectWrapper}>
            <div className={Styles.description}>
              <h2 style={{ color: Project.TextColor }}>{Project.Name}</h2>
              <a href={Project.Link} style={{ color: Project.TextColor }}>
                {Project.Link}
              </a>
              <ul className={Styles.Programs}>
                {Project.Programs.map((Program) => (
                  <li style={{ color: Project.TextColor }}> {Program.name}</li>
                ))}
              </ul>
              <p style={{ color: Project.TextColor }}>{Project.Description}</p>
            </div>
            <div className={Styles["example-images"]}>
              <img src={"./Allyson_site.jpg"} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
export default ProjectList;
