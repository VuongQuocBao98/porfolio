import React from "react";
import ProjectItem from "../components/ProjectItem/ProjectItem";

function Project(props) {
  return (
    <section className="m-4">
      <div className="grid grid-cols-12 gap-2">
        <ProjectItem />
      </div>
    </section>
  );
}

export default Project;
