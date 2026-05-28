import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2563eb",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Vocatio",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="explore"
        options={{
          title: "Test Vocacional",
        }}
      />
    </Stack>
  );
}