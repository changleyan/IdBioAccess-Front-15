export interface NavigationItem {
  title?: string;
  hidden?: boolean;
  active?: boolean;
  disabled?: boolean;
  permissions: string[];
  childrenItem: NavigationItemChildren[];
}

export interface NavigationItemChildren {
  title?: string;
  hidden?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  permissions: string[];
  icon?: string;
}
