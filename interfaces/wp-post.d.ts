import { WP_Post_Status_Name } from '../types/wp-post-status-name';
import { WP_Post_Type_Name } from '../types/wp-post-type-name';

export interface WP_Post {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: WP_Post_Status_Name | string;
  comment_status: string;
  ping_status: string;
  post_password: "" | string;
  post_name: string;
  to_ping: "" | string;
  pinged: "" | string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: "" | string;
  post_parent: 0 | number;
  guid: string;
  menu_order: 0 | number;
  post_type: WP_Post_Type_Name | string;
  post_mime_type: "" | string;
  comment_count: "0" | string;
  filter: "raw" | "edit" | "db" | "display";
}
