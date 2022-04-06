import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  public monTitre = "ceci est mon titre";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // ce code execute des instructions au bout de 5000ms (5sec)
      console.log('Changement de la valeur de la propriété monTitre');
      this.monTitre =" Un autre titre";
    }, 5000);
  }

  updateTitle() {
    
    console.log("Click button");
    this.monTitre = "Encore un autre titre";
  }
  changeProp() {
    console.log("Click button");
    this.monTitre = "salut";
  }

}