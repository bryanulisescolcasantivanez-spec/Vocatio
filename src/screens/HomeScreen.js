import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ router }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎓 Vocatio</Text>

      <Text style={styles.subtitle}>
        Descubre tu vocación mediante inteligencia artificial simbólica
      </Text>

      <TouchableOpacity
      style={styles.button}
      onPress={() => router.push("/explore")}
      >
        <Text style={styles.buttonText}>Comenzar Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#f8fafc",
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2563eb",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 25,
    color: "#475569",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 35,
    paddingVertical: 16,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});