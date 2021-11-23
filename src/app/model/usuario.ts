import { Rol } from './rol';

export interface Usuario {
id?:number;
email:string;
fullname:string;
address:string;
cellphone:string;
isAccepted?:boolean;
isDeleted?:boolean;
password:string;
vehicle?:string;
rol?:Rol;
}
