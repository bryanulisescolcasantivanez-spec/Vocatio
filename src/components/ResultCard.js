import { View, Text, StyleSheet } from "react-native";

export default function ResultCard({
  career,
  description,
  history = []
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Tu carrera ideal
      </Text>

      <Text style={styles.career}>
        {career}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.historyTitle}>
        Tus respuestas
      </Text>

      {history.map((item, index) => (
        <Text key={index}>
          {item.answer} - {item.question}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    boxShadow: "0px 6px 15px rgba(0,0,0,0.12)",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  career: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
  },

  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});