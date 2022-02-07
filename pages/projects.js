import ProjectList from "../Components/ProjectsList";
import Styles from "../styles/projects.module.css";
function ProjectPage() {
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
    <div className={Styles.Wrapper}>
      <h1>My Projects</h1>
      <ProjectList projects={Projects} />
    </div>
  );
}

export default ProjectPage;
