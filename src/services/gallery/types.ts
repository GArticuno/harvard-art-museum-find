import { AxiosError } from "axios";
import { QueryOptions } from "react-query";

import type { Info } from "../objects/types";

export type GalleriesParams = {
  size?: number;
  page?: number;
  sortorder?:	"asc" | "desc";
  aggregation?:	string;
  floor?: number;
}

export type GalleryProps = {
  gallerynumber: string;
  objectcount: number;
  labeltext: string;
  id: number;
  lastupdate: string;
  floor: number;
  name: string;
  theme: string;
  galleryid: number;
};

export type GalleriesResponse = {
  info: Info;
  records: GalleryProps[];
};

export type GalleryFloors = GalleryProps[][];

export type GalleriesRequest = {
  params?: GalleriesParams;
  options?: QueryOptions<GalleryFloors, AxiosError>;
};