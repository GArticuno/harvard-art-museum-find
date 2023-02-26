import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export const Loading = () => (
  <View className="items-center justify-center">
    <ActivityIndicator size={24} color={colors.gray[400]} />
  </View>
);