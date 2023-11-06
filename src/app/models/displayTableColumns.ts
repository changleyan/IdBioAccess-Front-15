export interface GenericDisplayTableColumns {
  headerName: string;
  dataKeyName: string;
  isIcon?: boolean;
  iconData: IconData[];
  tooltipMsg: string;
}

export interface IconData {
  icon: string;
  fns: (data: any) => void;
  isModalFunction: boolean;
  componentModal: any;
  modalMetadata: modalMetada,
  tooltipMsg: string;
}

export interface TableButton {
  icon?: string | null;
  tooltip: string;
  show: boolean;
  onClickF: () => void;
}

export interface modalMetada {
  width: string;
}

export interface CiudadanoDisplay {
  ci: string;
  name: string;
  apellidos: string;
  date: string;
  sexo: string;
  rol: string;
  area: string;
  residente: string;
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface UserDisplay {
  id:              number;
  email:           string;
  username:        string;
  isSuperuser:     boolean;
  firstName:       string;
  lastName:        string;
  isStaff:         boolean;
  isActive:        boolean;
  ci:              null | string;
}
