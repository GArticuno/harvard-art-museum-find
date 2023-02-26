import { View } from "react-native";

import { ObjectList } from "../../components/ObjectList";
import { GalleryList } from "../../components/GalleryList";

export const Home = () => {

  return (
    <View className="flex-1 pt-6 bg-background">
      <ObjectList />
      <GalleryList />
    </View>
  );
}