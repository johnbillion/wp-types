# WordPress Type Definitions

This package provides well-documented TypeScript definitions that describe the shape of WordPress core PHP objects such as `WP_Error`, `WP_Post`, and `WP_User`.

This means when you're working with JSON representations of PHP objects from WordPress you get definitions for their properties and nice documentation in your code editor.

## What's included?

### Interfaces

* `WP_Error`
* `WP_Post`
* `WP_User`

### Types

String enums are included for known possible values of some properties:

* `WP_Post_Status_Name`
* `WP_Post_Type_Name`
* `WP_User_Role`

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

### Do these definitions apply to REST API responses?

No. WordPress core objects in REST API responses are of a different shape, but I'm interested in creating definitions for these at some point in the future.

### Can I use the enums as values in my code?

Not currently, but I think this is a transpilation configuration problem in my consuming app. I'm trying to figure it out. Let me know if you can help.

### Why doesn't object X include property Y?

If it's not a public property of the object's class then it won't be included when encoding the object as JSON. You'll need to output it separately.

### Are these definitions automatically generated from WordPress core?

No. I started down that path (using [wp-parser-lib](https://github.com/johnbillion/wp-parser-lib)) but realised it's quicker to copy and paste from core, especially as I'm adding extra typings to properties when I can.
