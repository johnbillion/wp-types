import { WP_User_Role } from '../types/user-role';

/**
 * User data container.
 */
export interface WP_User_Data {

  /**
   * The user's ID.
   *
   * A numeric string, for compatibility reasons.
   */
  ID: string;

  /**
   * The user's login name.
   */
  user_login: string;

  /**
   * The one-way hash of the user's password.
   */
  user_pass: string;

  /**
   * The user's name as used in their author archive URL slug.
   */
  user_nicename: string;

  /**
   * The user's email address.
   */
  user_email: string;

  /**
   * The user's URL.
   */
  user_url: string;

  /**
   * The user's registration date.
   */
  user_registered: string;

  /**
   * The user's activation key. Be careful not to expose this in your application.
   */
  user_activation_key: "" | string;

  /**
   * The user's status. This field does not appear to be used by WordPress core.
   */
  user_status: "0";

  /**
   * The user's full display name.
   */
  display_name: string;

  /**
   * The user's spam status. Only used on Multisite.
   */
  spam?: "0" | "1";

  /**
   * The user's deletion status. Only used on Multisite.
   */
  deleted?: "0" | "1";
}

/**
 * A dictionary of user capabilities.
 *
 * Property names represent a capability name and boolean values represent whether the user has that capability.
 */
export interface WP_User_Caps {
  [capability: string]: boolean;
}

/**
 * Core class used to implement the WP_User object.
 */
export interface WP_User {

  /**
   * User data container.
   */
  data: WP_User_Data,

  /**
   * The user's ID.
   */
  ID: number,

  /**
   * The individual capabilities the user has been given.
   *
   * See the allcaps property for a complete list of caps that the user has.
   */
  caps: WP_User_Caps,

  /**
   * User metadata option name.
   */
  cap_key: "wp_capabilities" | string,

  /**
   * The roles the user is part of.
   */
  roles: (WP_User_Role|string)[],

  /**
   * All capabilities the user has, including individual and role based.
   */
  allcaps: WP_User_Caps,

  /**
   * The filter context applied to user data fields.
   */
  filter: null | "raw" | "edit" | "db" | "display" | "attribute" | "js",
}
