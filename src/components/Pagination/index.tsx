import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import type { PaginationProps } from "./types";
import colors from "tailwindcss/colors";

export const Pagination = ({ page, pages, onPressBack, onPressForward}: PaginationProps) => {
  return (
    <View className="flex-1 flex-row items-center justify-center mt-2 mb-2">
      <View>
        <TouchableOpacity
          onPress={onPressBack}
          disabled={page <= 1}
          className="p-1"
        >
          <AntDesign
            name="caretleft"
            size={24}
            color={page <= 1 ? colors.gray[300] : colors.gray[800]}
          />
        </TouchableOpacity>
      </View>
      <View className="p-1">
        <Text className="font-semibold text-lg">{page}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPressForward}
          disabled={page === pages}
          className="p-1"
        >
          <AntDesign
            name="caretright"
            size={24}
            color={page === pages ? colors.gray[300] : colors.gray[800]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};