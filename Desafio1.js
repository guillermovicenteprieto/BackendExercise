//declarando la clase Usuario

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
  
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
  
    addMascota(nombreMascota) {
      return this.mascotas.push(nombreMascota);
    }
  
    countMascotas() {
      return `${this.mascotas.length}`;
    }
  
    addBook(nombre, autor) {
      return this.libros.push({ nombre: nombre, autor: autor });
    }
  
    getBookNames() {
      return `${this.libros.map((book) => book.nombre)}`;
    }
  }
  
  // Instanciando un objeto de la clase Usuario
  const usuario1 = new Usuario(
    "Guillermo",
    "Vicente",
    [
      { nombre: "Así habló Zaratustra", autor: "Nietzsche" },
      { nombre: "El Aleph", autor: "Jorge Luis" },
    ],
    ["Perro", "Gato"]
  );
  
  // Instanciando un nuevo usuario
  const usuario2 = new Usuario(
    "Elon",
    "Musk",
    [{ nombre: "El Principito", autor: "Antoine de Saint-Exupéry" }],
    ["Conejo", "Pato", "Ternero"]
  );
  
  console.log(usuario1);
  console.log(usuario2);
  
  console.log("---método 1: getFullName---");
  console.log(`Nombre Completo usuario 1: ${usuario1.getFullName()}`);
  console.log(`Nombre Completo usuario 2: ${usuario2.getFullName()}`);
  console.log("");
  
  console.log(`Mascotas usuario 1: ${usuario1.mascotas}`);
  console.log(`Mascotas usuario 2: ${usuario2.mascotas}`);
  console.log("---método 2: addMascota---");
  console.log(`Agrego mascota de nombre Pancho a usuario 1 `);
  usuario1.addMascota("Pancho");
  console.log(`Agrego mascota de nombre Shiba a usuario 2`);
  usuario2.addMascota("Shiba");
  console.log("");
  console.log(`Mascotas usuario 1 ahora: ${usuario1.mascotas}`);
  console.log(`Mascotas usuario 2 ahora: ${usuario2.mascotas}`);
  console.log("");
  
  console.log("---método 3: countMascotas---");
  console.log(`Cantidad Mascotas usuario 1: ${usuario1.countMascotas()}`);
  console.log(`Cantidad mascotas usuario 2: ${usuario2.countMascotas()}`);
  console.log("");
  
  console.log("-----método 4: addBook-----");
  console.log(`Se agrega título de Cortázar al array de libros de usuario 1 `);
  usuario1.addBook("Rayuela", "Julio Cortázar");
  console.log(`Se agrega título de Borges al array de libros de usuario 2 `);
  usuario2.addBook("Historia Universal de la infamia", "Jorge Luis Borges");
  console.log("");
  
  console.log("-----método 5: getBookNames-----");
  console.log(`Libros usuario 1: ${usuario1.getBookNames()}`);
  console.log(`Libros usuario 2: ${usuario2.getBookNames()}`);
  console.log("");
  
