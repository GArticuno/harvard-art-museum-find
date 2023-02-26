import { Text } from "react-native";
import { DescriptionProps } from "./types";

export const Description = ({ label, value }: DescriptionProps) => (
  <Text className="m-1">
    {label}: <Text className="font-semibold">{value ?? "Not dated"}</Text>
  </Text>
);