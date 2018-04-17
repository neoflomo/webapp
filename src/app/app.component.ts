import { Component, OnInit } from '@angular/core';
import { DatabaseApiService, SchulungsDaten } from './database-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Schulungsverzeichnis';
  organisation ='Verbandsgemeindeverwaltung Asbach';
  nameSchulung = '';
  datum_von = '';
  datum_bis = '';
  ort = '';
  kosten = 0;
  schulungsdatenListe: SchulungsDaten[] = [];

  constructor(private dbService: DatabaseApiService) {
  }

  ngOnInit(): void {
    this.dbService.getSchulungseintraege().subscribe(res => {
      this.schulungsdatenListe = res;
    })
  }


  save() {
    console.log({name: this.nameSchulung, datum_von: this.datum_von, datum_bis: this.datum_bis, ort: this.ort, kosten: this.kosten});
    this.dbService.saveSchulungseintrag({name: this.nameSchulung, datum_von: this.datum_von, datum_bis: this.datum_bis, ort: this.ort, kosten: this.kosten}).subscribe(result => {
      
    });
  } 
}


