import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})
export class AppComponent { 

  chefs:any[]=[];

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getChefs().subscribe(
          data=>this.chefs=data
        )
    }

    getEventValue($event:any) :string {
      console.log("calles");
      return $event.target.value;
    } 

    onRowEditInit(product: any) {
        
    }

    onRowEditSave(product: any) {

    }

    onRowEditCancel(product: any, index: number) {

    }
}
