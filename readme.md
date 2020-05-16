# WordPress Type Definitions

This package provides well-documented TypeScript definitions of WordPress core PHP objects, such as `WP_Error`, `WP_Post`, and `WP_User`.

## Why would I want this?

If you're writing TypeScript and you're working with a JSON representation of a PHP object from WordPress, it's useful to have a definition for it.

## Do these definitions work with REST API responses?

No, WordPress core objects in REST API responses are of a different shape, but I'm interested in creating definitions for those at some point in the future.

## What's included?

### Interfaces

* `WP_Error`
* `WP_Post`

### Types

Some type definitions are also included (for known possible values of properties) as string enums:

* `WP_Post_Status_Name`
* `WP_Post_Type_Name`

## Installation

```sh
npm install wp-types --save-dev
```

## Usage

```ts
import { WP_Post } from "wp-types";

function get_title( post: WP_Post ): string {
	return post.post_title;
}
```
