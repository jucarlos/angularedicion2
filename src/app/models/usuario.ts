export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public cloud?:string,
        public clouds?:string,
        public role?: string,
        public google?: boolean,
        public _id?: string,
    ) {}

}