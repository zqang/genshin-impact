import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Characters } from './characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [ConfigService]
})
export class CharactersComponent implements OnInit {
  public characters! : Characters[];

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  public getCharacters(): void {
    this.config.getCharacters().subscribe(
      (Response : Characters[]) => {
        this.characters = Response
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
