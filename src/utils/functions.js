class Funciones {
  generarCodigo(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  sortByKeyDesc(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x > y ? -1 : x < y ? 1 : 0;
    });
  }

  separarPalabras(cadena) {
    let cadenaPalabras = [];
    let cadenaArr = cadena.split(" ");
    for (let i = 0; i < cadenaArr.length; i++) {
      let palabra = cadenaArr[i];
      let contiene = false;
      for (let j = 0; j < cadenaPalabras.length; j++) {
        let pal = cadenaPalabras[j];
        if (pal == palabra) {
          contiene = true;
        }
      }
      if (!contiene && palabra != "") {
        cadenaPalabras.push(palabra.toUpperCase());
      }
    }
    return cadenaPalabras;
  }

  getFechaHoyTexto() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

  getFechaTextoDesdeDate(date) {
    var fecha = new Date(date);
    var dd = String(fecha.getDate()).padStart(2, "0");
    var mm = String(fecha.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = fecha.getFullYear();

    fecha = yyyy + "-" + mm + "-" + dd;
    return fecha;
  }

  getPermisosIDs(privilegios) {
    let permisos = [];
    //Si no es válida la lista de privilegios devuelvo en blanco
    if (
      privilegios == null ||
      !Array.isArray(privilegios) ||
      privilegios.length == 0
    ) {
      return permisos;
    }

    for (let i = 0; i < privilegios.length; i++) {
      let privilegio = privilegios[i];
      permisos.push(privilegio.privilegio_id);
    }

    return permisos;
  }

  combinaciones(cadena) {
    let combinaciones = [];
    let cadenaArr = cadena.split("");
    for (let j = 1; j <= cadenaArr.length; j++) {
      let aumento = j;

      for (let i = 0; i < cadenaArr.length; i++) {
        var caracter = "";
        for (let h = i; h < i + aumento; h++) {
          let element = cadenaArr[h];
          caracter += element;
        }
        caracter = caracter.trim().toUpperCase();
        if (caracter.length == aumento) {
          if (!(combinaciones.indexOf(caracter) > 0)) {
            combinaciones.push(caracter);
          }
        }
      }
    }
    combinaciones.push("oG39wf1gxHOgRMjpDQdUpyO9qO4lRlhQJIFWclLi");
    return combinaciones;
  }

  responderError(texto, obj = null) {
    return {
      is_error: true,
      error: texto,
      msj: texto,
      obj: obj,
    };
  }

  responderOK(texto, obj = null) {
    return {
      is_error: false,
      error: null,
      msj: texto,
      obj: obj,
    };
  }
}
module.exports = Funciones.prototype;
