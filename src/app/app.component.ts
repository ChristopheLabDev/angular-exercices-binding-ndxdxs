import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any[];
  private dataBrute: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.getUsersData());
    this.dataBrute = this.dataService.getUsersData();
    this.data = [...this.dataBrute];
  }

  rechercheApresInputRecu(textInputRecu: string) {
    console.log('Parent ', textInputRecu);
    this.data = this.dataBrute.filter((user) =>
      user.name.first.toLowerCase().includes(textInputRecu.toLowerCase())
    );
  }
}
