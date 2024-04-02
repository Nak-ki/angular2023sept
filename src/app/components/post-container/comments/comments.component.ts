import { Component } from '@angular/core';
import {IComment} from "../../../interfaces";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {CommentComponent} from "../comment/comment.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments:IComment[]

  constructor(private  postService:PostService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getCommentsById(id).subscribe(value => this.comments = value)

      if(!this.comments){
        this.postService.getCommentsById(id).subscribe(value => this.comments = value)
      }

    })
  }

}
