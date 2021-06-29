import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Characters } from "../components/characters/characters";

@Injectable()
export class ConfigService{
  private apiServerUrl = environment.serverUrl

  constructor(private http : HttpClient){}

  getCharacters() : Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiServerUrl}characters`);
  }

}
