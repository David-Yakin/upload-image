import http from "./httpService";
import { apiUrl } from "../../config.json";

export async function uploadImage(data){
  return http.post(`${apiUrl}/images`, data).catch( err => console.log(err));
}

export async function getImage(){
  return http.get(`${apiUrl}/`)
}
