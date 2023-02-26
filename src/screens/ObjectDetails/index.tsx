import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";

import { Loading } from "../../components/Loading";

import { getObject } from "../../services/objects";
import { LOADING_IMAGE, NO_IMAGE_URL } from "../../utils/constants/image";

import type { ObjectDetailsParams } from "./types";
import { descriptions } from "./Decriptions";

export const ObjectDetails = () => {
  const { id } = useRoute().params as ObjectDetailsParams;

  const { data, isLoading } = getObject({ id });

  if(isLoading) {
    return  (
      <View className="flex-1 items-center justify-center">
        <Loading />
      </View>
    );
  };

  return (
    <View className="flex-1 pt-6 bg-gray-100">
       <Text className="font-bold text-lg text-center px-2 mb-1">{data?.title}</Text>
      <View className="h-1/2 mb-4">
        <ReactNativeZoomableView className="h-full" maxZoom={30} >
          <Image
            source={{ uri: data?.primaryimageurl ?? NO_IMAGE_URL, cache: "force-cache" }}
            className="self-center mt-2 bg-gray-200"
            style={{
              width: "100%",
              height: "100%"
            }}
            resizeMode="contain"
            loadingIndicatorSource={{ uri: LOADING_IMAGE }}
          />
        </ReactNativeZoomableView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" >
        <View className="pl-3 mb-3">
          {descriptions({data}).map((item, index) => {
            return (
              <Animated.View
                key={item.id.toString()}
                entering={index %2 === 0 ? FadeInLeft : FadeInRight}
                exiting={index %2 === 0 ? FadeOutLeft : FadeOutRight}
                style={{
                }}
                
              >
                {item.component}
              </Animated.View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
};