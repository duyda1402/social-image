import { Photo, ProfileUser } from "../interface";
import { apiUnsplash } from "./unsplash-instance";

type FetchPhotoDto = {
  per_page?: number;
  page?: number;
  order_by?: "latest" | "oldest" | "popular";
};

export async function fetchPhotos(params: FetchPhotoDto) {
  const res = await apiUnsplash.get<any, any>("/photos", {
    params: params,
  });
  return res;
}

export async function fetchPhotosByUsername(
  username: string,
  params?: FetchPhotoDto
) {
  const res = await apiUnsplash.get<any, any>(`/users/${username}/photos`, {
    params: params,
  });
  return res;
}

type ParamSearchDto = {
  per_page?: number;
  page?: number;
  query?: string;
  order_by?: "latest" | "relevant";
  collections?: string;
  content_filter?: "low" | "high";
  color?:
    | "black_and_white"
    | "black"
    | "white"
    | "yellow"
    | "orange"
    | "red"
    | "purple"
    | "magenta"
    | "green"
    | "teal"
    | "blue";
  orientation?: "landscape" | "portrait" | "squarish";
};

export async function searchPhotos(params: ParamSearchDto) {
  const res = await apiUnsplash.get<any, any>("/search/photos", {
    params: params,
  });
  return res;
}

export async function fetchProfileUser(username: string) {
  const res = await apiUnsplash.get<any, ProfileUser>("/users/" + username);
  return res;
}

export async function fetchPhotoRandom() {
  const res = await apiUnsplash.get<any, Photo>("/photos/random");
  return res;
}
