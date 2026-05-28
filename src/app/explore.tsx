import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Speech from "expo-speech";

import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import ResultScreen from "../screens/ResultScreen";
import { decisionTree } from "../data/decisionTree";

type TreeNode = {
  question?: string;
  career?: string;
  desc?: string;
  yes?: TreeNode;
  no?: TreeNode;
};

export default function ExploreScreen() {
  const [currentNode, setCurrentNode] =
    useState<TreeNode>(decisionTree);

  const [progress, setProgress] =
    useState<number>(0);

  const [history, setHistory] = useState<
    { question: string; answer: string }[]
  >([]);

  // Leer automáticamente cada pregunta
  useEffect(() => {
    if (currentNode.question) {
      Speech.stop();

      Speech.speak(currentNode.question, {
        language: "es-ES",
        pitch: 1,
        rate: 0.9,
      });
    }

    // Leer resultado final
    if (currentNode.career) {
      Speech.stop();

      Speech.speak(
        `Tu carrera recomendada es ${currentNode.career}`,
        {
          language: "es-ES",
          pitch: 1,
          rate: 0.9,
        }
      );
    }
  }, [currentNode]);

  const calculateProgress = (
    current: TreeNode
  ): number => {
    if (current.career) return 100;
    return Math.min(progress + 15, 100);
  };

  const handleAnswer = (answer: boolean) => {
    const nextNode = answer
      ? currentNode.yes
      : currentNode.no;

    if (!nextNode) return;

    setHistory([
      ...history,
      {
        question: currentNode.question || "",
        answer: answer ? "Sí" : "No",
      },
    ]);

    setProgress(calculateProgress(nextNode));
    setCurrentNode(nextNode);
  };

  if (currentNode.career) {
    return (
      <ResultScreen
        result={currentNode}
        history={history}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <QuestionCard
        question={currentNode.question || ""}
        onYes={() => handleAnswer(true)}
        onNo={() => handleAnswer(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    padding: 20,
  },
});