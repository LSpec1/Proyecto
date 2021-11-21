export interface empleo{
  _idNoticia:number;
  titulo:string;
  empresa:string;
  pais:string;
  ciudad:string;
  imagen: string;
  fecha:Date;
  descripcion:string;
  contacto: string;
  correo: string;
  isVerificada: boolean;
  salario: string;
  jornada: string;
}


export let empleos: Array<empleo>=[{
    "_idNoticia":1,
    "titulo": "Programador front-end en empresa",
    "empresa": "Program S.A.C",
    "pais": "Chile",
    "ciudad": "Santiago de Chile",
    "imagen": "assets/Compañias/Compañia1.png",
    "fecha": new Date(2021,11,18,10),
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "contacto": "1 6817243",
    "correo": "Programsac@gmail.com",
    "isVerificada": false,
    "salario": "",
    "jornada": "Full time"
  },{
    "_idNoticia":2,
    "titulo": "Diseñador UI en empresa",
    "empresa": "UXp S.A.S",
    "pais": "Colombia",
    "ciudad": "Bogotá",
    "imagen": "assets/Compañias/Compañia4.png",
    "fecha": new Date(2021,11,18,20),
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "contacto": "1 6817243",
    "correo": "Programsac@gmail.com",
    "isVerificada": true,
    "salario": "",
    "jornada": "Full time"
  },{
    "_idNoticia":3,
    "titulo": "Product Designer",
    "empresa": "Gecko Corp.",
    "pais": "Chile",
    "ciudad": "Santiago de Chile",
    "imagen": "assets/Compañias/Compañia2.png",
    "fecha": new Date(2021,11,18,30),
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "contacto": "1 6817243",
    "correo": "Programsac@gmail.com",
    "isVerificada": true,
    "salario": "",
    "jornada": "Full time"
  },{
    "_idNoticia":4,
    "titulo": "Vacante en ventas",
    "empresa": "Sunny Company",
    "pais": "Colombia",
    "ciudad": "Bogotá",
    "imagen": "assets/Compañias/Compañia3.jpg",
    "fecha": new Date(2021,1,18,10),
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "contacto": "1 6817243",
    "correo": "Programsac@gmail.com",
    "isVerificada": true,
    "salario": "",
    "jornada": "Full time"
  },{
    "_idNoticia":5,
    "titulo": "Diseñador UX en empresa",
    "empresa": "UXp S.A.S",
    "pais": "Colombia",
    "ciudad": "Bogotá",
    "imagen": "assets/Compañias/Compañia4.png",
    "fecha": new Date(2021,11,18,10),
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "contacto": "1 6817243",
    "correo": "Programsac@gmail.com",
    "isVerificada": true,
    "salario": "",
    "jornada": "Full time"
}]
