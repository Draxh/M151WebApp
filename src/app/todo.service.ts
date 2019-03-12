import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private serviceProvider : string = "https://localhost:5001/api/todoitem";
  constructor(private httpClient : HttpClient) { }

  public getAll() {
    return this.httpClient.get<any>(this.serviceProvider);
  }

  public delete(id) {
    return this.httpClient.delete<any>(this.serviceProvider + id).subscribe(
      res => {
        console.log("Erfolg");
      },
      err => {
        console.log("Error " + err);
      }
    )
  }

  public put(id, newValues) {
    return this.httpClient.put<any>(this.serviceProvider + id, newValues)
  }

  public create(newValues) {
    return this.httpClient.post<any>(this.serviceProvider, newValues);
  }

  public getItem(id) : Observable<any> {
    return this.httpClient.get<any>(this.serviceProvider + id);
  }
}
