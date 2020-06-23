export interface IRepository {
  name: string;
  id: number;
  description: string;
  stargazers_count: number;
}

export interface IApiResponse {
  data: {
    [items: string]: IRepository[];
  };
}

export interface IDispatche {
  type: string;
  payload: any;
}

export type IApiResponse = IApiResponse;
export type IDispatche = IDispatche;