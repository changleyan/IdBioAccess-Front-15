export interface AuthLogion {
  accessToken:  string;
  refreshToken: string;
  user:         UserLogin;
}

export interface UserLogin {
  username:  string;
  firstName: string;
  lastName:  string;
  isActive:  boolean;
  email:     string;
  ci:        null;
  groups:    Group[];
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


export interface User {
  id:              number;
  groups:          Group[];
  userPermissions: any[];
  email:           string;
  username:        string;
  lastLogin:       Date;
  isSuperuser:     boolean;
  firstName:       string;
  lastName:        string;
  isStaff:         boolean;
  isActive:        boolean;
  dateJoined:      Date;
  slug:            string;
  created:         Date;
  updated:         Date;
  ci:              null;
}
