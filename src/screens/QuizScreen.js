import React, { useState } from "react";
import { arbolVocacional } from "../data/decisionTree";
import { avanzarNodo, esNodoFinal } from "../utils/treeTraversal";

export default function QuizScreen({ navigation }) {
  const [nodoActual, setNodoActual] = useState(arbolVocacional);
  const [historial, setHistorial] = useState([]);

  const responder = (respuesta) => {
    const siguiente = avanzarNodo(nodoActual, respuesta);

    setHistorial([
      ...historial,
      {
        pregunta: nodoActual.pregunta,
        respuesta
      }
    ]);

    if (esNodoFinal(siguiente)) {
      navigation.navigate("Resultado", {
        resultado: siguiente,
        historial
      });
    } else {
      setNodoActual(siguiente);
    }
  };

  return (
    <>
      <QuestionCard
        pregunta={nodoActual.pregunta}
        onYes={() => responder(true)}
        onNo={() => responder(false)}
      />
    </>
  );
}