# WordPress Type Definitions

This package provides well-documented TypeScript definitions of WordPress core PHP objects, such as `WP_Error`, `WP_Post`, and `WP_User`.

When you're working with JSON representations of PHP objects from WordPress, it's useful to have definitions for them.

## What's included?

### Interfaces

* `WP_Error`
* `WP_Post`

### Types

String enums are also included for known possible values of some properties:

* `WP_Post_Status_Name`
* `WP_Post_Type_Name`

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

### Do these definitions apply to REST API responses?

No. WordPress core objects in REST API responses are of a different shape, but I'm interested in creating definitions for these at some point in the future.

### Can I use the enums as values in my code?

Not currently. I'm trying to figure it out.

### Are these definitions automatically generated from WordPress core?

No. I started down that path (using [wp-parser-lib](https://github.com/johnbillion/wp-parser-lib)) but realised it's quicker to copy and paste from core, especially as I'm adding extra typings to properties when I can.
