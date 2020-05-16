import { WP_Post_Status_Name } from '../types/wp-post-status-name';
import { WP_Post_Type_Name } from '../types/wp-post-type-name';

/**
 * Core class used to implement the WP_Post object.
 */
export interface WP_Post {

  /**
   * Post ID.
   */
  ID: number;

  /**
   * ID of post author.
   *
   * A numeric string, for compatibility reasons.
   */
  post_author: string;

  /**
   * The post's local publication time.
   */
  post_date: string;

  /**
   * The post's GMT publication time.
   */
  post_date_gmt: string;

  /**
   * The post's content.
   */
  post_content: string;

  /**
   * The post's title.
   */
  post_title: string;

  /**
   * The post's excerpt.
   */
  post_excerpt: string;

  /**
   * The post's status.
   */
  post_status: WP_Post_Status_Name | string;

  /**
   * Whether comments are allowed.
   */
  comment_status: string;

  /**
   * Whether pings are allowed.
   */
  ping_status: string;

  /**
   * The post's password in plain text.
   */
  post_password: "" | string;

  /**
   * The post's slug.
   */
  post_name: string;

  /**
   * URLs queued to be pinged.
   */
  to_ping: "" | string;

  /**
   * URLs that have been pinged.
   */
  pinged: "" | string;

  /**
   * The post's local modified time.
   */
  post_modified: string;

  /**
   * The post's GMT modified time.
   */
  post_modified_gmt: string;

  /**
   * A utility DB field for post content.
   */
  post_content_filtered: "" | string;

  /**
   * ID of a post's parent post.
   */
  post_parent: 0 | number;

  /**
   * The unique identifier for a post, not necessarily a URL, used as the feed GUID.
   */
  guid: string;

  /**
   * A field used for ordering posts.
   */
  menu_order: 0 | number;

  /**
   * The post's type, like post or page.
   */
  post_type: WP_Post_Type_Name | string;

  /**
   * An attachment's mime type.
   */
  post_mime_type: "" | string;

  /**
   * Cached comment count.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_count: "0" | string;

  /**
   * Stores the post object's sanitization level.
   *
   * Does not correspond to a DB field.
   */
  filter: "raw" | "edit" | "db" | "display";
}
