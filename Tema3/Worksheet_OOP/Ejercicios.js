//1
class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
        estomago = [];
    }
    comer(comida){
        while(estomago<10);
            estomago.push(comida);
    }
    wc(){
        if(estomago=10)
            estomago=[];
    }
    toString(){
        return this.nombre + ", " + this.edad;
    }
}

//2
class coche{
    constructor(modelo,litrosKilometro){
        this.modelo=modelo;
        this.litrosKilometro = litrosKilometro;
        deposito =0;
        kilometros =0;
    }
    repostar(litros){
        deposito += litros;
    }
    conducir(distancia){
        const maxDistancia = this.deposito * this.litrosKilometro;
        if (distancia <= maxDistancia) {
            this.kilometros += distancia;
            this.deposito -= distancia / this.litrosKilometro;
        } else {
            this.kilometros += maxDistancia;
            this.deposito = 0;
            return `Me quedo sin combustible a los  ${this.kilometros} kilómetros!`;
        }
    }
}

//3
class Lambadasian{
    constructor({nombre, edad, localizacion}){
        this.nombre=nombre;
        this.edad = edad;
        this.localizacion = localizacion;
    }
    habla(){
        return "mi nombre es "+ this.nombre+ ", soy de "+ this.localizacion;
    }
}


//4 
class Instructor extends Lambadasian{
    constructor({nombre, edad, localizacion, especialidad, lengua, frase}){
        super(nombre,edad,localizacion);
        this.especialidad=especialidad;
        this.lengua=lengua;
        this.frase = frase;
    }

    demo(asigantura){
        return "hoy vamos a aprender sobre " +asigantura;
    }
    grado(estudiante, asigantura){
        return `${estudiante.nombre} recibe la puntuacion perfecta en ${asigantura}` 
    }
}

// 5
class Estudiante extends Lambadasian{
    constructor({nombre,edad,localizacion, colegioAnterior, nombreClase, asiganturasFav}){
        super(nombre,edad,localizacion);
        this.colegioAnterior=colegioAnterior;
        this.nombreClase=nombreClase;
        this.asiganturasFav =asiganturasFav ;
    }
    listadoAsignaturas(){
        return `Me encanta ${this.asiganturasFav.join(' ,')}!`;
    }
    
}

//Ejercicio 6:
class Instructor extends Lambadasian {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
        super({ name, age, location });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}
class ProjectManager extends Instructor {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor }) {
        super({ name, age, location, specialty, favLanguage, catchPhrase });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const pm = new ProjectManager({
    name: "Alex",
    age: 40,
    location: "Chicago",
    specialty: "Full-Stack Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "Keep pushing forward!",
    gradClassName: "CS1",
    favInstructor: "Sean"
});

console.log(pm.speak()); 
console.log(pm.demo("React")); 
console.log(pm.grade({ name: "John" }, "React")); 
console.log(pm.standUp("webpt5")); 
console.log(pm.debugsCode({ name: "John" }, "React"));


//7
const student = new Estudiante({
    name: "Alice",
    age: 25,
    location: "Los Angeles",
    previousBackground: "Graphic Designer",
    className: "CS132",
    favSubjects: ["HTML", "CSS", "JavaScript"],
    grade: 65
});
const instructor = new Instructor({
    name: "Jane",
    age: 35,
    location: "San Francisco",
    specialty: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies."
});

console.log(student.speak()); 
console.log(student.listSubjects());
console.log(student.PRAssignment("JavaScript"));
console.log(student.sprintChallenge("JavaScript"));
console.log(student.graduate());

console.log(instructor.adjustGrade(student));
console.log(student.graduate());