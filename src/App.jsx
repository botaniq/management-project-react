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

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NoProjectSelected onStartAddProject={handleStartNewProject} />;
  } else if (projectState.selectedProjectId === 0) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartNewProject} />
      {content}
    </main>
  );
}

export default App;
