import expresiones from "../const/regex";

let valido = false;

const camposValidados = {
  email: false,
  name: false,
  lastName: false,
  passwd: false,
};

const emailYaRegistrado = () => {
  document.getElementById(`reg-email`).classList.add("invalido");
  document.getElementById(`reg-email`).classList.remove("valido");
}

const resetCampos = () => {
  camposValidados["email"] = false;
  camposValidados["name"] = false;
  camposValidados["lastName"] = false;
  camposValidados["passwd"] = false;
};

const verificar = (campo, regex, value) => {
  if (regex.test(value)) {
    document.getElementById(`reg-${campo}`).classList.remove("invalido");
    document.getElementById(`reg-${campo}`).classList.add("valido");
    camposValidados[campo] = true;
  } else {
    document.getElementById(`reg-${campo}`).classList.add("invalido");
    document.getElementById(`reg-${campo}`).classList.remove("valido");
    camposValidados[campo] = false;
  }

  if (
    camposValidados.name &&
    camposValidados.passwd &&
    camposValidados.email &&
    camposValidados.lastName
  )
    valido = true;
  else valido = false;
};

const validar = (e, campo) => {
  switch (campo) {
    case "email":
      verificar("email", expresiones.correo, e.target.value);
      break;
    case "name":
      verificar("name", expresiones.nombre, e.target.value);
      break;
    case "lastName":
      verificar("lastName", expresiones.nombre, e.target.value);
      break;
    case "passwd":
      verificar("passwd", expresiones.password, e.target.value);
      break;
    default:
      break;
  }
};

export { validar, resetCampos, valido, emailYaRegistrado };
