import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'; // Ruta al módulo de Material
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-post-create',
  standalone: true,
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  imports: [CommonModule, FormsModule, MaterialModule]
})
export class PostCreateComponent implements OnInit {
    posts: Post[] = []; // Define la propiedad posts
    private apiUrl = `${environment.apiUrl}/posts`;
    constructor(private http: HttpClient, private postsService: PostsService) {}

    ngOnInit() {}
  
    // Método para agregar un nuevo post
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { title, content } = form.value;

    // Usa el token CSRF al agregar el post
    this.postsService.addPost(title, content).subscribe(
      response => {
        console.log('Post added successfully:', response);
        this.postsService.getPosts(); // Opcional: Actualiza la lista de posts después de agregar uno nuevo
        console.log('Nueva lista de posts:', this.posts);
        
        form.resetForm(); // Restablece el formulario
      },
      error => {
        console.error('Error adding post:', error);
      }
    );
  }

  }