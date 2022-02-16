import ProjectList from "../Components/ProjectsList";
import Styles from "../styles/projects.module.css";
function ProjectPage() {
  const Projects = [
    {
      Name: "Freeman Pet Shop",
      Link: "https://freemanpets.com",
      img: "./Allyson_site_thumb.png",
      description:
        "Simple CRUD forum built in Django to share posts about your pets. -- Under Construction",
    },
    {
      Name: "Jared McCarver",
      Link: "https://jmccarver.com",
      img: "./jared_site_thumb.png",
      description:
        "Personal porfolio built using React and Next JS. Icon and landing image made by Allyson Freeman",
    },
    {
      Name: "Allyson Freeman",
      Link: "https://allysonfreeman.com/",
      img: "./Allyson_site_thumb.png",
      description:
        "Allyson Freeman GIS Porfolio built in Next that integrates with ESRI API -- Under Construction",
    },
    {
      Name: "McCarver-Freeman Wedding",
      Link: "https://mccarver-freeman-wedding.herokuapp.com/",
      img: "./wedding.png",
      description:
        "This is a wedding RSVP website that I create for my Fiance and my wedding.",
    },
  ];
  return (
    <div className={Styles.Wrapper}>
      <h1>My Projects</h1>
      <div className={Styles.Projects}>
        <ProjectList projects={Projects} />
      </div>
    </div>
  );
}

export default ProjectPage;
