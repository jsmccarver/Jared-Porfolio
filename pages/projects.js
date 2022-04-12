import Styles from "../styles/ProjectList.module.css";

const ProjectList = () => {
  const Projects = [
    {
<<<<<<< HEAD
      Name: "Freeman Pet Shop",
      Link: "https://jmccarver.com/projects",
      Programs: [{ name: "Django" }, { name: "HTML5" }, { name: "Postgres" }],
      Color: "#0f182b",
      TextColor: "honeydew",
      wave: "spacer spacer4",
      img: "./freeman-pets.png",
      Description:
        "My Fiance and and I love pets and recently adopted a new kitten from Petsmart. I made this theoretical website in order for people to find forever homes for their fostered kittens and dogs. It is made using Django that connects to a postgres database.",
    },
    {
=======
>>>>>>> 3d70a854bf883dc204f1a98d81d42b06c05534e8
      Name: "Jared McCarver",
      Link: "https://allysonfreeman.com/",
      Programs: [{ name: "React" }, { name: "next" }],
      Color: "#eddcd2",
      TextColor: "black",
      wave: "spacer spacer5",
      img: "./Jared_site.png",
      Description:
        "This is my personal webpage. I created it using React and Next JS. ",
    },
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
<<<<<<< HEAD
      Programs: [{ name: "React" }, { name: "next" }, { name: "ESRI GIS API" }],
      Color: "white",
      TextColor: "black",
      img: "./Allyson_site.jpg",
      wave: "spacer spacer2",
      Description:
        "I was the developer for Allyson's personal website. She is agraduate of NC State with a Bachelors in Geology. She is currentlypursuing a certificate in Geospatial Information Systems from NCState and does research with The Machado Lab. You can find out more through the link. The project is written in React JS.",
=======
      img: "./Allyson_site_thumb.png",
      description:
        "Allyson Freeman GIS Porfolio built in Next that integrates with ESRI API -- Under Construction",
    },
    {
      Name: "McCarver-Freeman Wedding",
      Link: "https://mccarver-freeman-wedding.herokuapp.com/",
      img: "./wedding.png",
      description:
        "This is a wedding RSVP website that I create for my Fiance and my wedding.  -- Under Construction",
>>>>>>> 3d70a854bf883dc204f1a98d81d42b06c05534e8
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
                <p style={{ color: Project.TextColor }}>
                  {Project.Description}
                </p>
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
