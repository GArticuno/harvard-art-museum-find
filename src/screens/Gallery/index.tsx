import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { GalleryObjectCard } from "../../components/GalleryObjectCard";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";

import { getObjects } from "../../services/objects";
import { ObjectParams } from "../../services/objects/types";

import type { GalleryParams } from "./types";

export const Gallery = () => {
  const { gallery } = useRoute().params as GalleryParams;
  const [params, setParams] = useState<ObjectParams>({
    gallery: gallery.id,
  });
  const { data, isLoading } = getObjects({ params });
  const changePage = (page: number) => {
    setParams(prevState => {
      return {
        ...prevState,
        page,
      }
    });
  };
  return (
    <View className="bg-gray-200 flex-1 pt-5">
      <FlatList
        data={data?.records}
        keyExtractor={(item) => item.objectid.toString()}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        ListHeaderComponent={(
          <View>
            <Text className="self-left text-center mx-2 font-semibold text-lg text-gray-800">
              {gallery.name}
            </Text>
            <Text className="font-light text-center text-gray-600 text-sm italic mb-3 mx-4">
              {gallery.theme}
            </Text>
            {isLoading && <Loading />}
          </View>
        )}
        renderItem={({ item }) => <GalleryObjectCard item={item} />}
        ListFooterComponentStyle={{
          display: data && data?.records.length > 0 ? "flex" : "none"
        }}
        ListFooterComponent={data && (
          <Pagination
            {...data.info}
            onPressBack={() => changePage(data.info.page - 1)}
            onPressForward={() => changePage(data.info.page + 1)}
          />
        )}
        ListEmptyComponent={data && (
          <View className="mt-5">
            <Text className="font-regular text-center text-lg mx-5 text-gray-700">
              Looks like this gallery doesn't have any objects on exhibition
            </Text>
          </View>
        )}
      />
    </View>
  );
};