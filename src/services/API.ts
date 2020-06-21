import axios from "axios";

const API_URL = `https://api.github.com/search/`;


const API = {
  searchRepositories: (term: string, sort?: string, order?: string) =>
    methods.get('repositories', term, sort, order)

}

const methods = {
  get: async (route: string, term: string, sort?: string, order?: string) => {

    const params = {
      ...(sort && { sort }),
      ...(order && { order }),
    };

    return await axios.get(`${API_URL}${route}?q=${term}`, { params })
      .then(response => response)
      .catch(err => console.warn(err));
  }
}

export default API;