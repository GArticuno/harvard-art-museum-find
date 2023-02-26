
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { galleryFloor } from "../../../utils/galleryFloor";

import type { GalleryItemProps } from "./types";

export const GalleryItem = ({ item, index }: GalleryItemProps) => {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 mt-1">
      <ScrollView
        className="p-3"
        key={index.toString()}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <Text className="font-bold text-gray-900 text-lg mb-2">
          {galleryFloor(index)}
        </Text>
        {item.map(gallery => (
          <View
            key={gallery.id}
            className="bg-gray-100 rounded-md m-1 p-3 mb-5"
            style={{
              shadowColor: "#000",
              shadowOffset:{width: -2, height: 4},
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <TouchableOpacity activeOpacity={0.3} onPress={() => navigate("gallery", { gallery })}>
              <Text className="font-semibold text-gray-900 text-sm mb-1">
                {gallery.name}
              </Text>
              <Text className="font-light text-gray-600 text-sm italic">
                theme: {gallery.theme ?? "Doesn't have"}
              </Text>
            </TouchableOpacity>
          </View>
          
        ))}
      </ScrollView>
    </View>
  );
};