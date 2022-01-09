# Redis (v3) Promise Client

This package is for those who want to use the node-redis (v3) versions, that supports createClient configuration options like: `prefix`, `rename_commands` from version 3, but also want the full promise and type definitions support for version 4.

> This package is a wrapper built on top of [redis-v3][1] ([github][2]). Do checkout the docs for that package for details related to node-redis.

## Installation

```sh
npm install redis-v3-promise
```

## Usage

### Example

```js
const redis = require('redis-v3-promise');
const client = redis.createClient();

// client.native is the native client created by node-redis lib
client.native.on('error', function(error) {
  console.error(error);
});

client
  .set('key', 'value')
  .then(console.log)
  .catch(console.error);

client
  .get('key')
  .then(console.log)
  .catch(console.error);
```

> **Important**: `client.native` is the native client created by node-redis lib. For listening to errors or using all other functions provided by the native redis client (other than the redis commands) do use the `client.native` object.
>
> For full list of supported commands, options and docs, please check this: [redis-v3][1]

### Native Redis Object

In case the native v3 redis object is required (assertions for tests, etc), use this:

```js
const {
  AbortError,
  AggregateError,
  ReplyError,
} = require('redis-v3-promise').v3;
```

[1]: https://www.npmjs.com/package/redis/v/3.1.2
[2]: https://github.com/redis/node-redis/tree/v3.1.2
