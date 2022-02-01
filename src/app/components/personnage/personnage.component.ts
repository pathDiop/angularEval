import { Component, OnInit } from '@angular/core';
import { Charcaters } from 'src/app/model/characters';
import { PsersonnageService } from 'src/app/psersonnage.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit {

listeCharacters: Charcaters[]=[];
characterValue: any;
id: any;
selectedId: string = "";
 
  constructor(private service: PsersonnageService) { }

  ngOnInit(): void {
    this.getAll();
  }
  private getAll() {
    this.service.getAll().subscribe({
      next: (data: Charcaters[]) => this.listeCharacters = data,
      error: (err: any) => console.error(err),
      complete: () => console.log("affichage")
    });
  }
  

  delete(character:Charcaters,id:any ): void{
    this.service.delete(character,id).subscribe(() => this.getAll())
  }

  save(): void {
    let newCharacter = {...this.characterValue.value}
    this.service.create(newCharacter).subscribe(() => this.getAll())
  }
  modifier(): void {
    let newCharacter = {...this.characterValue.value, id:this.selectedId}
    console.log("eeeeee");
    this.service.modifier(newCharacter,newCharacter.id).subscribe(()  => this.getAll())
   
  }
}
