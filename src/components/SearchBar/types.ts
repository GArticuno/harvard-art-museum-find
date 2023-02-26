import type { TextInputProps } from "react-native";

export type SearchBarProps = {
  onPressSearch: () => void;
  isSearching: boolean;
} & TextInputProps;