import Styles from "../styles/Home.module.css";

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
      Description:
        "I was the developer for Allyson&apos;s personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
    },
    {
      Name: "Weather App",
      Link: "https://jmccarver.com/projects/weather-app",
      Programs: [
        { name: "React" },
        { name: "next" },
        { name: "Unsplash API" },
        { name: "Weather API" },
      ],
      Description:
        "This is a small weather app that I developed. It will update the ",
    },
  ];
  return (
    <div className={Styles.projects}>
      <h1>My Projects</h1>

      <div className={Styles.works}>
        {Projects.map((Project) => (
          <div className={Styles.Project}>
            <div className={Styles.description}>
              <h2>{Project.Name}</h2>
              <a href={Project.Link}>{Project.Link}</a>
              <ul className="grid">
                {Project.Programs.map((Program) => (
                  <li>{Program.name}</li>
                ))}
              </ul>
              <p>{Project.Description}</p>
            </div>
            <div className={Styles["example-images"]}>
              <img src={"./Allyson_site.jpg"} />
              <img src={"./Allyson_site_mobile.jpg"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
