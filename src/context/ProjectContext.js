import { useContext, createContext, useReducer } from "react";

const ProjectContext = createContext();

export function useProjectContext() {
  return useContext(ProjectContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "dataFetch":
      return { ...state, data: action.payload };
    case "changeCategory":
      return { ...state, category: action.payload };
    case "changeSortingFilter":
      return { ...state, sortingFilter: action.payload };
    case "changeLanguageFilter":
      return { ...state, languageFilter: action.payload };
    case "searchValue":
      return { ...state, searchValue: action.payload };
    case "loadingProgress":
      return { ...state, loading: action.payload };
    default:
      throw new Error();
  }
};

export function ProjectProvider({ children }) {
  const initState = {
    data: [],
    category: "technology",
    sortingFilter: "published_desc",
    languageFilter: false,
    searchValue: "",
    loading: true,
  };
  const [projectState, projectDispatch] = useReducer(reducer, initState);

  return (
    <ProjectContext.Provider value={{ projectState, projectDispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}
