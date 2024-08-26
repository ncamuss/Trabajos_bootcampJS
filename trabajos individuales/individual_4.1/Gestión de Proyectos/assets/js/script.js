// Función constructora para los Trabajadores
function Trabajador(nombre, rut, cargo) {
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
}

// Función constructora para los Proyectos
function Proyecto(nombreProyecto) {
    this.nombreProyecto = nombreProyecto;
    this.trabajadores = [];
}

// Crear una instancia de Proyecto
var proyecto1 = new Proyecto("Construcción Edificio A");

// Crear instancias de Trabajadores
var trabajador1 = new Trabajador("Juan Pérez", "12345678-9", "Albañil");
var trabajador2 = new Trabajador("Ana López", "98765432-1", "Ingeniera");

// Métodos getters y setters para Trabajador
Trabajador.prototype.getNombre = function() {
    return this.nombre;
};

Trabajador.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

Trabajador.prototype.getRut = function() {
    return this.rut;
};

Trabajador.prototype.setRut = function(rut) {
    this.rut = rut;
};

Trabajador.prototype.getCargo = function() {
    return this.cargo;
};

Trabajador.prototype.setCargo = function(cargo) {
    this.cargo = cargo;
};

// Método para agregar un trabajador a un proyecto
Proyecto.prototype.agregarTrabajador = function(trabajador) {
    this.trabajadores.push(trabajador);
};

// Método para buscar un trabajador por nombre
Proyecto.prototype.buscarTrabajadorPorNombre = function(nombre) {
    return this.trabajadores.filter(function(trabajador) {
        return trabajador.getNombre() === nombre;
    });
};

// Método para mostrar todos los trabajadores de un proyecto
Proyecto.prototype.mostrarTrabajadores = function() {
    this.trabajadores.forEach(function(trabajador) {
        console.log("Nombre: " + trabajador.getNombre() + ", RUT: " + trabajador.getRut() + ", Cargo: " + trabajador.getCargo());
    });
};

// Agregar trabajadores al proyecto


proyecto1.agregarTrabajador(trabajador1);
proyecto1.agregarTrabajador(trabajador2);

// Buscar un trabajador por nombre
var resultadoBusqueda = proyecto1.buscarTrabajadorPorNombre("Juan Pérez");
console.log("Resultado de búsqueda:", resultadoBusqueda);

// Mostrar todos los trabajadores en el proyecto
proyecto1.mostrarTrabajadores();
