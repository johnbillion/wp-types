# WordPress Type Definitions

This package provides TypeScript definitions of WordPress core PHP objects, such as `WP_Error`, `WP_Post`, and `WP_User`.

## Why would I want this?

If you're writing TypeScript and you're working with a JSON representation of a PHP object from WordPress, it's useful to have a definition for it.

## How is this possible?

Many classes in WordPress are dumb data stores which expose their properties publicly. This means interfaces can be defined which fit the JSON representation of instances of those classes.

## What else is included?

Some type definitions are included for known possible values of properties, for example the `WP_Post_Type_Name` string enum.

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
