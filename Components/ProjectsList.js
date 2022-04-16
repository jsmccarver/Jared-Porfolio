import Styles from "./styles/Project.module.css";

function ProjectList({ projects }) {
  return (
    <div className={Styles.Cards}>
      {projects.map((Project) => (
        <div key={Project.Name} className={Styles.Project}>
          <img src={Project.img}></img>
          <div className={Styles["Project-text"]}
          >
            <a href={Project.Link}>
              <h3>{Project.Name}</h3>
            </a>
            <p
          >{Project.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
