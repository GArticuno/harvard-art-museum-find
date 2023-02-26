import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

import type { GalleriesRequest, GalleriesResponse, GalleryFloors } from "./types";

export const getGalleries = ( { params, options }: GalleriesRequest) => {
  return useQuery<GalleryFloors, AxiosError>([`galleries`, params], async () => {
    let floors: GalleryFloors = [];
    for(let i = 0; i <= 5; i+=1){
      const response = await api.get<GalleriesResponse>("gallery", {
        params: {
          apikey: process.env.APIKEY,
          floor: i,
          ...params,
        }
      });
      floors.push(response.data.records)
    }
    return floors;
  }, options)
};