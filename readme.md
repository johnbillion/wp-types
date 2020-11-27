# WordPress Type Definitions

This package provides well-documented TypeScript definitions that describe the shape of:

* WordPress core PHP objects such as `WP_Error`, `WP_Post`, and `WP_User`
* WordPress REST API responses such as those from `/wp/v2/posts` and `/wp/v2/users`
* The allowed values for several of their properties for both

This means when you're working with JSON representations of PHP objects from WordPress, or working with items from a REST API response, you can add types for your data and then get definitions for their properties and nice documentation in your code editor.

## What's included?

### Interfaces for PHP objects

* `WP_Comment`
* `WP_Error`, plus:
  - `WP_Error_With_Error`
  - `WP_Error_Without_Error`
* `WP_Post`
* `WP_User`

### Interfaces for REST API response objects

* `WP_REST_API_Post`
* `WP_REST_API_User`

### Types

String enums and typings are included for known possible values and structures of various properties:

* `WP_Error_Data`
* `WP_Error_Messages`
* `WP_Post_Comment_Status_Name`
* `WP_Post_Format_Name`
* `WP_Post_Status_Name`
* `WP_Post_Type_Name`
* `WP_User_Caps`
* `WP_User_Data`
* `WP_User_Filter_Context`
* `WP_User_Role_Name`

## Installation

```sh
npm install wp-types --save-dev
```

## Usage

Usage with objects from PHP represented as JSON:

```ts
import type { WP_Post } from 'wp-types';

function get_title( post: WP_Post ): string {
	return post.post_title;
}
```

Usage with the REST API, for example when using `apiFetch()`:

```ts
import type { WP_REST_API_User } from 'wp-types';

const api: Promise<WP_REST_API_User[]> = wp.apiFetch( {
	path: '/wp/v2/users/',
} );

// userIDs now has a known type of `number[]`
const userIDs = api.then( users => users.map( user => user.id ) );
```

## FAQs

### When do these definitions apply?

The core object definitions apply whenever a supported PHP object is represented as JSON. How you do that depends on your application, but here are some examples:

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

The REST API object definitions apply to the object (or array of objects) you get in response to a REST API request.

The definitions also apply outside of the browser of course, for example if you're saving data as JSON and reading it in a Node application.

### How do I know these definitions are valid?

They're generated directly from [the `wp-json-schemas` package](https://www.npmjs.com/package/wp-json-schemas), which is itself tested using output from WordPress core.

If you'd like to contribute to these definitions, please contribute upstream to the `wp-json-schemas` package. Thanks!

### Can I use the enums as values in my code?

Not currently, but I think this is a transpilation configuration problem in my consuming app. I'm trying to figure it out. Let me know if you can help.
