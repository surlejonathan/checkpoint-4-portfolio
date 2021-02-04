import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import MetaTags from "react-meta-tags";
import projectStyles from "../projects/Projects.module.css";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/project`)
      .then((response) => response.data)
      .then((data) => setProjectList(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    return getProjects();
  }, []);

  return (
    <div className='main'>
      <MetaTags>
        <title>Mes Projets</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <h1>Mes Projets</h1>
      <div className={projectStyles.grid}>
        {projectList &&
          projectList.map((project, index) => (
            <Card
              key={index}
              path='/projects'
              className={projectStyles.card}
              title={project.project_name}
              imgSrc={project.project_picture}
              description={project.project_presentation}
            />
          ))}
      </div>
    </div>
  );
}
