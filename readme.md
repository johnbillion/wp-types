# WordPress Type Definitions

This package provides well-documented TypeScript definitions that describe the shape of WordPress core PHP objects such as `WP_Error`, `WP_Post`, and `WP_User`, and the allowed values for several of their properties.

This means when you're working with JSON representations of PHP objects from WordPress you get definitions for their properties and nice documentation in your code editor.

## What's included?

### Interfaces

* `WP_Comment`
* `WP_Error`, plus:
  - `WP_Error_With_Error`
  - `WP_Error_Without_Error`
* `WP_Post`
* `WP_User`

### Types

String enums and typings are included for known possible values and structures of some properties:

* `WP_Error_Data`
* `WP_Error_Messages`
* `WP_Post_Status_Name`
* `WP_Post_Type_Name`
* `WP_User_Caps`
* `WP_User_Data`
* `WP_User_Role_Name`

## Installation

```sh
npm install wp-types --save-dev
```

## Usage

```ts
import type { WP_Post } from 'wp-types';

function get_title( post: WP_Post ): string {
	return post.post_title;
}
```

## FAQs

### When do these definitions apply?

They apply whenever a supported PHP object is represented as JSON. How you do that depends on your application, but here are some examples:

```php
// get_post() returns a WP_Post or null:
printf(
	'let wpPost = %s;',
	wp_json_encode( get_post() )
);

// get_userdata() returns a WP_User or false:
printf(
	'let wpUser = %s;',
	wp_json_encode( get_userdata( 123 ) )
);
```

The definitions also apply outside of the browser of course, for example if you're saving data as JSON and reading it in a Node application.

### How do I know these definitions are valid?

They're generated directly from [the `wp-json-schemas` package](https://www.npmjs.com/package/wp-json-schemas), which is itself tested using output from WordPress core.

If you'd like to contribute to these definitions, please contribute upstream to the `wp-json-schemas` package. Thanks!

### Do these definitions apply to REST API responses?

No. WordPress core objects in REST API responses are of a different shape, but I'm interested in creating definitions for these at some point in the future.

### Can I use the enums as values in my code?

Not currently, but I think this is a transpilation configuration problem in my consuming app. I'm trying to figure it out. Let me know if you can help.
