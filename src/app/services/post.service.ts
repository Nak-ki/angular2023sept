import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getALL():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.base)
  }

  getCommentsById(id:number):Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.posts.commentsByPostId(id))
  }
}
