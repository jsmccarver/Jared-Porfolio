import Styles from "./styles/Project.module.css";

function ProjectList(props) {
  return (
    <div className={Styles.Cards}>
      {props.projects.map((Project) => (
        <div key={Project.Name} className={Styles.Project}>
          <img src={Project.img}></img>
          <div className={Styles["Project-text"]}>
            <a href={Project.Link}>
              <h3>{Project.Name}</h3>
            </a>
            <p>{Project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
