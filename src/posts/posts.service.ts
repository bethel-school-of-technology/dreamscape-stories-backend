import { Injectable } from '@nestjs/common';
import { Posts } from './interfaces/post.interface'

@Injectable()
export class PostsService {
    private readonly posts: Posts [] = [
        {
            id:100009,
            content:"This is a hard coded testing post!"
        },
        {
            id:1000899,
            content:"This is the second hard coded testing post!"
        }
    ];

    findAll(): Posts [] {
        return this.posts; 
    }
}
