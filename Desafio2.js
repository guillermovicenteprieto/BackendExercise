// Entrega Desafío: "MANEJO DE ARCHIVOS"

const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
    this.contenidoArchivo = [];
  }

  //1. métódo save: Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(objeto) {
    let id = 1;
    if (this.contenidoArchivo.length > 0) {
      id = this.contenidoArchivo[this.contenidoArchivo.length - 1].id + 1;
    }
    objeto.id = id;
    this.contenidoArchivo.push(objeto);

    await fs.writeFile(
      this.nombreArchivo,
      JSON.stringify(this.contenidoArchivo, null, 2),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    return id;
  }

  //2. método getById(): Recibe un id y devuelve el objeto con ese id, o null si no está.
  getById(id) {
    if (this.contenidoArchivo.length > 0) {
      const producto = this.contenidoArchivo.find((p) => p.id === id);
      return producto;
    } else {
      return null;
    }
  }

  //3. getAll(): Devuelve un array con los objetos presentes en el archivo.
  getAll() {
    return this.contenidoArchivo;
  }

  //4. deleteById(): Elimina del archivo el objeto con el id buscado.
  deleteById(id) {
    const producto = this.contenidoArchivo.find((p) => p.id === id);
    if (producto) {
      delete this.contenidoArchivo[id];
    }
  }

  //5. deleteAll(): Elimina todos los objetos del archivo.
  deleteAll() {
    this.contenidoArchivo = [];
  }
}

//instanciando el contenedor a partir de la clase Contenedor
const contenedor = new Contenedor("productos.txt");

// 1. aplicando método save
contenedor.save({
  title: "Ensaladera",
  price: 1600,
  thumbnail:
    "https://res.cloudinary.com/nuco/image/upload/v1643143101/Productos/ensaladera_lds71l.jpg",
});

contenedor.save({
  title: "Taza Grande",
  price: 1200,
  thumbnail:
    "https://res.cloudinary.com/nuco/image/upload/v1643143063/Productos/TazaGr_lpner0.jpg",
});

contenedor.save({
  title: "Taza Pequeña",
  price: 800,
  thumbnail:
    "https://res.cloudinary.com/nuco/image/upload/v1643143067/Productos/tazasCh_pkeump.jpg",
});

contenedor.save({
  title: "Fuente",
  price: 1800,
  thumbnail:
    "https://res.cloudinary.com/nuco/image/upload/v1643143102/Productos/fuente_tlnhk9.jpg",
});

// 2. aplicando método getById():
console.log(contenedor.getById(5));
//el métódo éste me devuelve undefined si no existe el id

//3. aplicando método getAll():
const TodosLosProductos = contenedor.getAll();
console.log({ TodosLosProductos });

//4. aplicando método deleteById(Number):
contenedor.deleteById(1);


//5. aplicando método deleteAll():

//contenedor.deleteAll();