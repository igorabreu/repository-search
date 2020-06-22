import axios from "axios";

const API_URL = `https://api.github.com/search/`;

interface IQueryParams {
  q: string;
  sort?: string;
  order?: string;
}

const API = {
  searchRepositories: (term: string, sort?: string, order?: string, callback = get) => {
    const queryParams = { q: term, sort, order };

    return callback('repositories', queryParams)
  }
}


const get = async (route: string, queryParams: IQueryParams) => {

  const params = {
    ...(queryParams?.q && { q: queryParams.q }),
    ...(queryParams?.sort && { sort: queryParams.sort }),
    ...(queryParams?.order && { order: queryParams.order }),
  };

  return await axios.get(`${API_URL}${route}`, { params })
    .then(response => response)
    .catch(error => console.warn(error));
}


export default API;