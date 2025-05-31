import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Post } from './post.model';
import { CsrfService } from '../csrf.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PostsService {

    //TODO CAMBIAR URL DE LA API
    private apiUrl = environment.apiUrl + '/posts';
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    private newPosts: Post[] = [];
    constructor(private http: HttpClient, private csrfService: CsrfService) {}

    // Método para obtener posts
    getPosts(): void {
        this.http.get<{ message: string; posts: Post[] }>(this.apiUrl, { withCredentials: true })
        .pipe(
            tap(postData => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
                console.log('Posts fetched:', this.posts);
            }),
            catchError(error => {
                console.error('Error fetching posts:', error);
                return of({ message: '', posts: [] }); // Retorna un observable vacío en caso de error
            })
        )
        .subscribe(); // Suscribirse para iniciar la solicitud
    }

    // Método para obtener un observable de actualizaciones de posts
    getPostUpdateListener(): Observable<Post[]> {
        return this.postsUpdated.asObservable();
    }


    // Método para agregar un nuevo post
    addPost(post: Post): Observable<any> {
        this.newPosts.push(post); 
        console.log('NUEVO POST:', post);

        // Obtener encabezados con el token CSRF
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            const body = post;
            return this.http.post<Post>(
                this.apiUrl, 
                body, 
                { headers, withCredentials: true }
            ).pipe(
            catchError(error => {
                console.error('Error adding post:', error);
                return of(error);
            })
            );
        })
        );
    }

    deletePost(postId: string): Observable<any> {
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            console.log('Intentando borrar en el front:', postId);
            return this.http.delete(this.apiUrl + '/' + postId, { headers, withCredentials: true }).pipe(
                catchError(error => {
                    console.error('Error deleting post:', error);
                    return of(error);
            })
            );
        })
        );
    }

    updatePost(post: Post): Observable<any> {
        const postId= post._id;
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            console.log('Intentando actualizar en el front:', post);
            const body = post;
            return this.http.put(this.apiUrl + '/' + postId, body, { headers, withCredentials: true }).pipe(
            catchError(error => {
                console.error('Error updating post:', error);
                return of(error);
            })
            );
        })
        );
    }


}
