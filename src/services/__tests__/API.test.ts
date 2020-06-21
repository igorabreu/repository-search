/* eslint-disable @typescript-eslint/no-unused-expressions */
import API from 'services/API'

export interface ApiResponse {
  status: number;
}

describe('API service', () => {
  describe('searchRepositories function', () => {
    test('Should call function get with "repositories" url and all provided parameters', async () => {
      const get = jest.fn()
      await API.searchRepositories('react', 'stars', 'desc', get) as ApiResponse;

      expect(get).toBeCalledWith("repositories", { "order": "desc", "q": "react", "sort": "stars" })
    })

    test('Should call function get with no sort parameter', async () => {
      const get = jest.fn()
      await API.searchRepositories('react', undefined, 'desc', get) as ApiResponse;

      expect(get).toBeCalledWith("repositories", { "order": "desc", "q": "react" })
    })


    test('Should call function get with only q parameter', async () => {
      const get = jest.fn()
      await API.searchRepositories('react', undefined, undefined, get) as ApiResponse;

      expect(get).toBeCalledWith("repositories", { "q": "react" })
    })
  })
})