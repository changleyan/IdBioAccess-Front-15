import {Ciudadano} from "@app/models/ciudadano.response.type";

export interface GenericDisplayTableColumns {
  headerName: string;
  dataKeyName: string;
  isIcon: boolean;
  isImg: boolean;
  imgSrc: string;
  iconData: IconData[];
  tooltipMsg: string;
}

export interface IconData {
  icon: string;
  fns: (data: any) => void;
  isModalFunction: boolean;
  executeFns: boolean;
  componentModal: any;
  modalMetadata: modalMetada,
  tooltipMsg: string;
  show: boolean;
}

export interface TableButton {
  icon?: string | null;
  tooltip: string;
  show: boolean;
  onClickF: () => void;
}

export interface modalMetada {
  width: string;
  data: any;
}

export interface CiudadanoDisplay {
  foto: string;
  ci: string;
  name: string;
  apellidos: string;
  date: string;
  sexo: string;
  rol: string;
  area: string;
  residente: string;
  allData?: Ciudadano;
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
