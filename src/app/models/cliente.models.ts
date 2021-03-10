import { stringify } from "@angular/compiler/src/util";


export class Cliente {

    constructor( 
        public identificador: string,
        public _id: string,
        public nombre: string,
        public email: string,
        public clouds?: string
        ) { }

}