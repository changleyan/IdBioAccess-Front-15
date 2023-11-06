export interface ResponsePictaUser {
  count:    number;
  next:     null;
  previous: null;
  results:  User[];
}

export interface User {
  id:              number;
  groups:          Group[];
  userPermissions: any[];
  email:           string;
  username:        string;
  lastLogin:       Date | null;
  isSuperuser:     boolean;
  firstName:       string;
  lastName:        string;
  isStaff:         boolean;
  isActive:        boolean;
  dateJoined:      Date;
  slug:            string;
  created:         Date;
  updated:         Date;
  ci:              null | string;
}

export interface Group {
  id:          number;
  name:        string;
  permissions: Permission[];
}

export interface Permission {
  id:       number;
  name:     string;
  codename: string;
}
