import {GenericDisplayTableColumns, IconData} from "../models/displayTableColumns";

const iconModel: IconData = {
  icon: '',
  fns: () => {
  },
  isModalFunction: false,
  executeFns: false,
  componentModal: '',
  modalMetadata: {width: '100%', data: {}},
  tooltipMsg: '',
  show: false
}

export const rowModel: GenericDisplayTableColumns = {
  headerName: '',
  dataKeyName: '',
  tooltipMsg: '',
  iconData: [iconModel],
  imgSrc: '',
  isImg: false,
  isIcon: false
}

export default iconModel;
