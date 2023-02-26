import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "react-query";

import { Loading } from "./src/components/Loading";
import Routes from "./src/routes";

const queryClient = new QueryClient()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded) {
    return  (
      <View className="flex-1 items-center justify-center">
        <Loading />
      </View>
    );;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <StatusBar style="dark" backgroundColor="transparent" translucent />
    </QueryClientProvider>
  );
}
