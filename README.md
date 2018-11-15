# cloutexchange-web

This repository holds the website code for clout.exchange

## Setup

**Download Composer dependencies**

Make sure you have [Composer installed](https://getcomposer.org/download/)
and then run:

```
composer install
```

**Setup the Database**

TODO: database things

**Build your Assets**

Ensure you have both node.js and yarn installed on the development machine.
To build your assets, install the dependencies with yarn and then run encore:

```
yarn install
yarn run encore dev --watch
```

**Start the built-in web server**

```
php bin/console server:run
```

Now check out the site at `http://localhost:8000`
