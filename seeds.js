var mongoose = require("mongoose");
var User = require("./models/user");

var sampleUsers = [
	{
		//----------------------------------------PRIMERO---------------------------------------------------
		name : "Raul",
		lastName : "Castellanos",
		password: "Rcas001!",
		email: "A01154891@itesm.mx",
		schedule: {
			class:[{
				cName: "Estrutura de Datos",
				teacher: "Luis Humberto Gonzalez",
				place: "A3-101",
				day:["Martes", "Viernes"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Programa Listas"
			},
			{
				cName: "Expresion Verbal en el Ambito Profesional",
				teacher: "Idalia Hermelinda",
				place: "A3-301",
				day:["Martes", "Viernes"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Ensayo de Informes"
			}],
			event:[{
				eName: "HackMty",
				place: "Centro de Congresos",
				day:["Sabado", "Domingo"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				note: "llegar temprano para el registro"
			}]
		}	
	},

	//----------------------------------------SEGUNDO---------------------------------------------------
	{
		//_id:false,
		name: "Rigoberto",
		lastName: "Valadez",
		password: "Rval001!",
		email: "A01154892@itesm.mx",
		schedule: {
			class:[{
				cName: "Probabilidad y Estadistica",
				teacher: "Jose Armando Albert",
				place: "A7-402",
				day:["Lunes", "Jueves"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Graficar valores con R"
			},
			{
				cName: "Calculo I",
				teacher: "Lupita Lima",
				place: "A2-312",
				day:["Miercoles"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Resolver las derivadas"
			},
			{
				cName: "Fundamentos de Programacion",
				teacher: "Yolanda Martinez",
				place: "A3-303",
				day:["Lunes", "Jueves"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: ""
			}],
			event:[{
				eName: "Live Out 2018",
				place: "Parque Fundidora",
				day:["Sabado"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				note: ""
			}]
		}	
	},
	//----------------------------------------TERCERO---------------------------------------------------
	{
		//_id:false,
		name : "Sergio",
		lastName: "Diosdado",
		password: "Sdio001!",
		email: "A01154891@itesm.mx",
		schedule: {
			class:[{
				cName: "Matematicas III",
				teacher: "Jose Luis Garza",
				place: "A7-403",
				day:["Martes", "Viernes"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Programa Listas"
			},
			{
				cName: "Etica Persona y Sociedad",
				teacher: "Belinda Jimenez",
				place: "CETEC Norte",
				day:["Lunes", "Jueves"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Hacer tarea de clase virtual"
			}],
			event:[{
				eName: "Servicio Social",
				place: "Bilioteca ITESM",
				day:["Sabado"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				note: ""
			}]
		}	
	},
	//----------------------------------------CUARTO---------------------------------------------------
	{
		//_id:false,
		name: "Inaki",
		lastName: "Janeiro",
		password: "Ijan001!",
		email: "A01154891@itesm.mx",
		schedule: {
			class:[{
				cName: "Fundamentos de Ingenieria de Software",
				teacher: "Silvia Iliana Ramirez",
				place: "A4-102",
				day:["Miercoles"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				homework: "Tarea de Google Classrooms"
			}],
			event:[{
				eName: "HackMty",
				place: "Centro de Congresos",
				day:["Sabado", "Domingo"],
				startTime : new Date("December 17, 1995 03:24:00"),
				endTime : new Date("December 17, 1995 03:24:00"),
				note: ""
			}]
		}	
	}
];

function create(i){
	User.create(sampleUsers[i], function(err, data){
		if (err){
			console.log(err)
		} 
		else{
			console.log("New Data created!");
		}
	});
}

//Delete Committees
function seedDb(){
	User.remove({}, function(err){
		if (err){
			console.log(err);
		}
		else{
			console.log("Removed Users");
			//Add Committees
			for (var i = 0; i < sampleUsers.length; i++)
			{
				create(0);
			}
		}
	});
}
module.exports = seedDb;
