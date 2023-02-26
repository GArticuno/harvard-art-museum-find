import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { NO_IMAGE_URL } from "../../utils/constants/image";

import { Loading } from "../Loading";
import { GalleryObjectCardProps } from "./types";

export const GalleryObjectCard = ({ item }: GalleryObjectCardProps) => {
  const { navigate } = useNavigation();
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <ImageBackground
      className="items-center justify-end bg-background my-1 mx-2 h-60"
      source={{ uri: item.primaryimageurl ?? NO_IMAGE_URL }}
      onLoadEnd={() => setIsLoadingImage(false)}
    >
      {isLoadingImage && (
        <View className="self-center justify-center">
          <Loading />
        </View>
      )}
      <TouchableOpacity
        className="rounded-md p-3 m-2"
        style={{
          backgroundColor: item.primaryimageurl ? "#FFFFFFCC" : "#E5EBEDCC"
        }}
        onPress={() => navigate("objectDetails", { id: item.objectid })}
        activeOpacity={0.3}
      >
        <Text className="font-regular text-gray-800">
          {item.title ?? "untitled"}
        </Text>
        <Text className="font-regular italic text-gray-500">
          Culture: {item.culture ?? "no dated"}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}