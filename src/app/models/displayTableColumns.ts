export interface GenericDisplayTableColumns {
  headerName: string;
  dataKeyName: string;
}

export interface TableButton {
  icon?: string | null;
  tooltip: string;
  show: boolean;
  onClickF: () => void;
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

