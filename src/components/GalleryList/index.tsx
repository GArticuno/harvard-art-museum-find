import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

import { getGalleries } from "../../services/gallery";
import { PAGE_WIDTH } from "../../utils/constants/carousel";

import { Loading } from "../Loading";

import { GalleryItem } from "./GalleryItem";

export const GalleryList = () => {
  const { data, isLoading } = getGalleries({});
  return (
    <View className="flex-1 items-center justify-center">
      {isLoading && (
        <Loading />
      )}
      {data && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
        >
          <Carousel
            layout="default"
            itemWidth={PAGE_WIDTH}
            sliderWidth={PAGE_WIDTH}
            vertical={false}
            data={data}
            renderItem={({ item, index }) => <GalleryItem item={item} index={index} key={index.toString()} />}
          />
        </Animated.View>
        
      )}
    </View>
  );
}