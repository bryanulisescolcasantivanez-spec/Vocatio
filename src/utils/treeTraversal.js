export const avanzarNodo = (nodoActual, respuesta) => {
  if (!nodoActual) return null;

  return respuesta ? nodoActual.si : nodoActual.no;
};

export const esNodoFinal = (nodo) => {
  return nodo && nodo.carrera;
};
