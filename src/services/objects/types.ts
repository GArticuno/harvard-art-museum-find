import type { AxiosError } from "axios";
import type { QueryOptions } from "react-query";

export type Info = {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
};

export type ObjectProps = {
  objectid: number;
  peoplecount: number;
  accessionmethod: string;
  accessionyear: number;
  dated: string;
  classification: string;
  medium: string;
  technique: string;
  period: string;
  century: string;
  culture: string;
  creditline: string;
  department: string;
  division: string;
  description: string;
  provenance: string;
  url: string;
  contextualtext: {
    text: string;
    context: string;
  }[];
  gallery: {
      gallerynumber: string;
      floor: string;
      theme: string;
      name: string;
      galleryid: number;
  },
	people: {
		role: string;
		birthplace: string;
		gender: string;
		displaydate: string;
		prefix: string;
		culture: string;
		displayname: string;
		alphasort: string;
		name: string;
		personid: number;
		deathplace: string;
		displayorder: number
	}[];
  colors: {
    color: string,
    css3: string;
    hue: string;
    percent: number;
    spectrum: string;
  }[];
  colorcount: number;
  primaryimageurl: string;
  title: string;
}

export type ObjectParams = {
  size?: number;
  page?: number;
  sortorder?:	"asc" | "desc";
  aggregation?:	string;
  hasimage?:	0 | 1;
  century?: number | string;
  classification?:	string | number;
  culture?: string | number;
  person?: string | number;
  title?: string;
  keyword?: string;
  yearmade?: number;
  gallery?: number;
}

export type ObjectsResponse = {
  info: Info;
  records: ObjectProps[];
};

export type ObjectsRequest = {
  params?: ObjectParams;
  options?: QueryOptions<ObjectsResponse, AxiosError>;
};

export type ObjectRequest = {
  id: number;
  options?: QueryOptions<ObjectProps, AxiosError>;
};