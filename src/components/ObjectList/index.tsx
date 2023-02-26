import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View
} from "react-native";
import colors from "tailwindcss/colors";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";

import { getObjects } from "../../services/objects";
import type { ObjectParams } from "../../services/objects/types";
import { SearchBar } from "../SearchBar";
import { ObjectItem } from "./ObjectItem";

export const ObjectList = () => {
  const [keyword, setKeyword] = useState("");
  const [params, setParams] = useState<ObjectParams>({
    keyword: ""
  });
  const { data: dataObjects, isLoading: isLoadingObjects } = getObjects({
    params,
  });

  const changeParams = useCallback(() => {
    setParams(prevState => {
      return {
        ...prevState,
        keyword,
        page: 1
      }
    })
  }, [keyword]);

  const changePage = (page: number) => {
    setParams(prevState => {
      return {
        ...prevState,
        page,
      }
    });
  };

  return (
    <>
      <SearchBar
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
        onPressSearch={changeParams}
        isSearching={isLoadingObjects}
      />
      <Text className="text-center font-semibold text-lg mb-2">
        Harvard Art Museum
      </Text>
      <Animated.View
        className="flex-1 items-center justify-center"
        entering={FadeInRight}
        exiting={FadeOutRight}
      >
        {isLoadingObjects && (
          <ActivityIndicator size={50} color={colors.gray[300]} />
        )}
        {dataObjects && dataObjects.records.length > 0 && (
          <ObjectItem
            dataObjects={dataObjects}
            onPressBack={() => changePage(dataObjects.info.page - 1)}
            onPressForward={() => changePage(dataObjects.info.page + 1)}
          />
        )}
      </Animated.View>
    </>
  );
}