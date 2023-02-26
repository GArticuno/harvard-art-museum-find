import { Carousel } from "react-native-snap-carousel";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { PAGE_WIDTH } from "../../../utils/constants/carousel";

import type { ObjectItemProps } from "./types";
import { ObjectCard } from "../../ObjectCard";

export const ObjectItem = ({ dataObjects, onPressBack, onPressForward }: ObjectItemProps) => {
  const { navigate } = useNavigation();

  return (
    <Carousel
      layout="default"
      itemWidth={PAGE_WIDTH - 100}
      sliderWidth={PAGE_WIDTH}
      vertical={false}
      data={dataObjects.records}
      keyExtractor={(item) => item.objectid.toString()}
      layoutCardOffset={10}
      renderItem={({ item, index }) => (
        <View className="relative">
          {index === 0 && dataObjects.info.page !== 1 && (
            <View className="absolute -left-9 top-28 z-10">
              <TouchableOpacity
                onPress={onPressBack}
                className="p-1"
              >
                <AntDesign
                  name="caretleft"
                  size={30}
                  color={colors.gray[700]}
                />
              </TouchableOpacity>
            </View>
          )}
          <ObjectCard
            culture={item.culture}
            objectid={item.objectid}
            primaryimageurl={item.primaryimageurl}
            title={item.title}
          />
          {index === dataObjects.info.totalrecordsperquery - 1 && (
            <View className="absolute -right-9 top-28">
              <TouchableOpacity
                onPress={onPressForward}
                className="p-1"
              >
                <AntDesign
                  name="caretright"
                  size={30}
                  color={colors.gray[700]}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    />
  );
}