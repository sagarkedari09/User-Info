import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interface/app.types';
import { userDetails } from '../mock-backend/mockBackend';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(details:IUser[], searchValue:string): any {
    if(!details || !searchValue){
      return details
    }else{

    }
    return details.filter(ele=> ele.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
