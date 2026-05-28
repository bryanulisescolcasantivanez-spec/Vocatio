import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 12,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 30,
  },
  fill: {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 20,
  },
});