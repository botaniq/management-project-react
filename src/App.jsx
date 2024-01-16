import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
  });

  const handleStartNewProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: 0,
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NoProjectSelected onStartAddProject={handleStartNewProject} />;
  } else if (projectState.selectedProjectId === 0) {
    content = <NewProject onAdd={handleAddProject} />;
  }

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartNewProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
