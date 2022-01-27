import Styles from "./styles/ProjectList.module.css";

const ProjectList = () => {
  const Projects = [
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      Programs: [{ name: "React" }, { name: "next" }, { name: "ESRI GIS API" }],
      Color: "#82D4BB",
      TextColor: "white",
      img: "./Allyson_site.jpg",
      wave: "spacer spacer2",
      Description:
        "I was the developer for Allyson's personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
    },
    {
      Name: "Freeman Pet Shop",
      Link: "https://jmccarver.com/projects",
      Programs: [{ name: "Django" }, { name: "HTML5" }, { name: "Postgres" }],
      Color: "#edf2fb",
      TextColor: "#89608E",
      wave: "spacer spacer4",
      img: "./Under-Construction-Sign.png",
      Description:
        "My Fiance and and I love pets and recently adopted a new kitten from Petsmart. I made this theoretical website in order for people to find forever homes for their fostered kittens and dogs. It is made using Django that connects to a postgres database.",
    },
    {
      Name: "Jared McCarver",
      Link: "https://allysonfreeman.com/",
      Programs: [{ name: "React" }, { name: "next" }],
      Color: "#eddcd2",
      TextColor: "#7E7F9A",
      wave: "spacer spacer5",
      img: "./Jared_site.png",
      Description:
        "This is my personal webpage. I created it using React and Next JS. ",
    },
  ];
  return (
    <div className={Styles.projects}>
      <div className={"spacer spacer1"} />
      <h1>My Projects</h1>
      <div className={"spacer spacer3"} />
      {Projects.map((Project) => (
        <>
          <section
            className={Styles.Project}
            style={{ backgroundColor: Project.Color }}
          >
            <div className={Styles.ProjectWrapper}>
              <div className={Styles.description}>
                <h2 style={{ color: Project.TextColor }}>{Project.Name}</h2>
                <a href={Project.Link} style={{ color: Project.TextColor }}>
                  Live Link
                </a>
                <ul className={Styles.Programs}>
                  {Project.Programs.map((Program) => (
                    <li style={{ color: Project.TextColor }}>
                      {" "}
                      {Program.name}
                    </li>
                  ))}
                </ul>
                <p style={{ color: Project.TextColor }}>
                  {Project.Description}
                </p>
              </div>
              <div className={Styles["example-images"]}>
                <img src={Project.img} />
              </div>
            </div>
          </section>
          <div className={Project.wave} />
        </>
      ))}
    </div>
  );
};
export default ProjectList;
