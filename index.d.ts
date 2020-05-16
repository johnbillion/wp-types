export interface WP_Error {
  errors: any;
  error_data: any;
}

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

export enum WP_Post_Type_Name {
  post = "post",
  page = "page",
  attachment = "attachment",
  revision = "revision",
  nav_menu_item = "nav_menu_item",
  custom_css = "custom_css",
  customize_changeset = "customize_changeset",
  oembed_cache = "oembed_cache",
  user_request = "user_request",
  wp_block = "wp_block",
}

export enum WP_Post_Status_Name {
  publish = "publish",
  draft = "draft",
  auto_draft = "auto-draft",
  inherit = "inherit",
  pending = "pending",
  future = "future",
  trash = "trash",
  private = "private",
}
