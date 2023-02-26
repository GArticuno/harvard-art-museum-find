import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

import type { ObjectsResponse, ObjectsRequest, ObjectRequest, ObjectProps } from "./types";

export const getObjects = ( { params, options }: ObjectsRequest) => {
  return useQuery<ObjectsResponse, AxiosError>([`objects`, params], async () => {
    const response = await api.get<ObjectsResponse>("object", {
      params: {
        apikey: process.env.APIKEY,
        ...params,
        hasimage: 1,
      }
    });
    return response.data;
  }, options)
};

export const getObject = ( { id, options }: ObjectRequest) => {
  return useQuery<ObjectProps, AxiosError>([`object`, id], async () => {
    const response = await api.get<ObjectProps>(`object/${id}`, {
      params: {
        apikey: process.env.APIKEY,
      }
    });
    return response.data;
  }, options)
};