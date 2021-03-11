import { stringify } from "@angular/compiler/src/util";


export class Cliente {

    constructor( 
        public identificador: string,
        public nombre: string,
        public email: string,
        public _id?: string,
        public clouds?: string
        ) { }

}