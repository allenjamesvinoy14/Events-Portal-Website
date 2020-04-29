import { Injectable } from '@angular/core';

declare let toastr:any //this will tell out TS compiler we know about toastr and in this case it is something in the global scope

@Injectable()
export class ToastrService{
    //wrap each of Toastr Methods

    success(message:string,title?:string){
        toastr.success(message,title);
    }
    info(message:string,title?:string){
        toastr.info(message,title);
    }
    warning(message:string,title?:string){
        toastr.warning(message,title);
    }
    error(message:string,title?:string){
        toastr.error(message,title);
    }
    
}