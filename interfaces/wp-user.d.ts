import { WP_User_Role } from '../types/wp-user-role';

/**
 * User data object.
 */
export interface WP_User_Data {
  ID: string;
  user_login: string;
  user_pass: string;
  user_nicename: string;
  user_email: string;
  user_url: string;
  user_registered: string;
  user_activation_key: "" | string;
  user_status: "0";
  display_name: string;
  spam?: "0" | "1";
  deleted?: "0" | "1";
}

export interface WP_User_Caps {
  [capability: string]: boolean;
}

/**
 * Core class used to implement the WP_User object.
 */
export interface WP_User {
  data: WP_User_Data,
  ID: number,
  caps: WP_User_Caps,
  cap_key: "wp_capabilities" | string,
  roles: (WP_User_Role|string)[],
  allcaps: WP_User_Caps,
  filter: null | "raw" | "edit" | "db" | "display" | "attribute" | "js",
}
