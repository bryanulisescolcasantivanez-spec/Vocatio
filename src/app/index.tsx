import HomeScreen from "../screens/HomeScreen";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return <HomeScreen router={router} />;
}