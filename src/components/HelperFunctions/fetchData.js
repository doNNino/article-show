// other imports
import axios from "axios";
//default fetch functioin
export async function fetchData(projectState, projectDispatch) {
  // destructuring global state
  const { category, languageFilter, sortingFilter, searchValue } = projectState;
  const language = languageFilter ? "en" : "";

  try {
    // set loading to true while fetching articles
    await projectDispatch({ type: "loadingProgress", payload: true });
    // query parameters for the API request
    const params = {
      access_key: `${process.env.REACT_APP_ACCESS_KEY}`,
      limit: 100,
      keywords: searchValue,
      categories: category,
      languages: language,
      sort: sortingFilter,
    };
    // API request
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/news`,
      {
        params: params,
      }
    );
    // dispetching fetched data
    await projectDispatch({ type: "dataFetch", payload: response.data.data });
    // set loading to false when data is fetched
    await projectDispatch({ type: "loadingProgress", payload: false });
  } catch (error) {
    // show alert if error hapened while fetching
    await projectDispatch({ type: "loadingProgress", payload: false });
    console.log(error);
    alert("ERROR FETCHING DATA");
    throw error;
  }
}
