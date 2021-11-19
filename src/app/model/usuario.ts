import { Rol } from './rol';
export interface Usuario {
id?:number;
email:string;
fullname:string;
address:string;
cellphone:string;
isAccepted?:boolean;
isDeleted?:boolean;
observations:string;
password:string;
vehicle?:string;
rol?:Rol;
}