import { View, StyleSheet } from "react-native";
import ResultCard from "../components/ResultCard";

export default function ResultScreen({
  result,
  history
}) {
  return (
    <View style={styles.container}>
      <ResultCard
        career={result.career}
        description={result.desc}
        history={history}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8fafc",
  },
});