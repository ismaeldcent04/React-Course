import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.selectedProjectId, newProject],
      };
    });
  };
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject} />
        {/* <NewProject /> */}
        {projectsState.selectedProjectId === null ? (
          <NewProject onSave={handleAddProject} />
        ) : (
          <NoProjectSelected onStartAddProject={handleStartAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
