// style import
import "./styles/_app.scss";
// custom components imports
import Articles from "./components/Articles";
// context import
import { ProjectProvider } from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <Articles />
    </ProjectProvider>
  );
}

export default App;
