export interface NavigationItem {
  title?: string;
  hidden?: boolean;
  active?: boolean;
  disabled?: boolean;
  childrenItem: NavigationItemChildren[];
}

export interface NavigationItemChildren {
  title?: string;
  hidden?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  icon?: string;
}
