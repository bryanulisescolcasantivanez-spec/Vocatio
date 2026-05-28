import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuestionCard({ question, onYes, onNo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>

      <TouchableOpacity style={styles.yesButton} onPress={onYes}>
        <Text style={styles.buttonText}>✅ Sí</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.noButton} onPress={onNo}>
        <Text style={styles.buttonText}>❌ No</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  width: "100%",
  backgroundColor: "white",
  padding: 25,
  borderRadius: 20,
  elevation: 6,
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
},
  question: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#1e293b",
  },
  yesButton: {
    backgroundColor: "#22c55e",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
  },
  noButton: {
    backgroundColor: "#ef4444",
    padding: 18,
    borderRadius: 14,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});