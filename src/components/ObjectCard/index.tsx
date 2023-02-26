import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { NO_IMAGE_URL, LOADING_IMAGE } from "../../utils/constants/image";
import { Loading } from "../Loading";

import type { ObjectCardProps } from "./types";

export const ObjectCard = ({ primaryimageurl, objectid, title, culture }: ObjectCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

  return (
    <ImageBackground
      className="items-center justify-end"
      source={{ uri: primaryimageurl ?? NO_IMAGE_URL, cache: "force-cache" }}
      style={{ height: "100%", width: "100%" }}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
    >
      {isLoading && (
        <View className="self-center justify-center">
          <Loading />
        </View>
      )}
      <TouchableOpacity
        className="rounded-md p-3 m-2"
        style={{
          backgroundColor: "#FFFFFFCC"
        }}
        onPress={() => navigate("objectDetails", { id: objectid })}
        activeOpacity={0.3}
      >
        <Text className="font-regular text-gray-800">
          {title ?? "untitled"}
        </Text>
        <Text className="font-regular italic text-gray-500">
          Culture: {culture ?? "no dated"}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};