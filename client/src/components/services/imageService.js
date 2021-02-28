import http from "./httpService";
import { apiUrl } from "../../config.json";

export async function uploadImage(data){
  return http.post(`${apiUrl}/images`, data, {
    onUploadProgress: ProgressEvent => {
      console.log(`upload progress: ${Math.round(ProgressEvent.loaded / ProgressEvent.total *100)}%`);
    }
  }).then(res => { console.log(res.data); }).catch( err => console.log(err));
}

export async function getImage(){
  return http.get(`${apiUrl}/`)
}
