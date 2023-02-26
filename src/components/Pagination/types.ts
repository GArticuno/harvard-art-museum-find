import type { Info } from "../../services/objects/types";

export type PaginationProps = {
  onPressBack: () => void;
  onPressForward: () => void;
} & Info;