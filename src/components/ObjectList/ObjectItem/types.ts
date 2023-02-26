import { ObjectsResponse } from "../../../services/objects/types";

export type ObjectItemProps = {
  dataObjects: ObjectsResponse;
  onPressBack: () => void;
  onPressForward: () => void;
};