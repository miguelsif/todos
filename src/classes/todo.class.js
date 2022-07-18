export class Todo{

    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date ();
    }

    static fromJSON({id, tarea, completado, creado}){
        let todoTemp = new Todo(tarea);
        todoTemp.id = id;
        todoTemp.completado = completado;
        todoTemp.creado = creado;

        return todoTemp;
    }

    mostrar(){
        console.log(this.tarea, "-", this.id);
    }
}