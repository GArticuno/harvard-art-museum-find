import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import type { SearchBarProps } from "./types";

export const SearchBar = ({ value, onChangeText, onPressSearch, isSearching }: SearchBarProps) => (
  <View
    className="bg-input flex-row justify-between items-center p-2 m-2 rounded-xl"
  >
    <TextInput
      value={value}
      onChangeText={onChangeText}
      className="w-5/6 font-regular bg-input pl-1 text-gray-800"
      placeholder="Search here!"
      cursorColor={colors.red[400]}
      onPointerEnter={onPressSearch}
    />
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPressSearch}
      disabled={isSearching}
      className="p-1"
    >
      {isSearching ?
        <ActivityIndicator size={24} color={colors.gray[800]} />
        : <AntDesign name="search1" size={24} color={colors.gray[800]} />
      }
    </TouchableOpacity>
  </View>
)