import { Component } from '@angular/core';
import { Item } from './models/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItems : Item[] = [];

    selectedItem: Item = new Item();

    addItem(){
      this.selectedItem.id = this.listItems.length + 1;
      this.listItems.push(this.selectedItem);
      this.selectedItem = new Item();

    }

    deleteItem(id : number){
      console.log(id);
      this.listItems = this.listItems.filter(x => x.id != id);
    }

    deleteListItems(){
      this.listItems = [];
    }
}
