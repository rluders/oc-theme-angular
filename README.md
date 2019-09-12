# Angular Theme for OctoberCMS

This theme is using **Angular 8 LTS**.

## Requirements

* [RLuders.JWTAuth](https://octobercms.com/plugin/rluders-jwtauth)
* [RLuders.CORS](https://octobercms.com/plugin/rluders-cors)
* [RainLab.User](https://octobercms.com/plugin/rainlab-user)
* [Castiron Webpackmanifest](https://github.com/webdeveric/webpack-assets-manifest)
* [angular-cli](https://cli.angular.io/)

## Installation

### 1. Download it from OctoberCMS Marketplace or clone it directly from the git;

```
$ cd themes
$ git clone https://github.com/rluders/oc-theme-angular.git
```

### 2. Install the **Castiron WebpackPhpManifest** package

```
$ cd <path-to-octobercms-root>
$ composer require castiron/webpackassets-plugin
```

Sometimes it appears in the installed packages list in Octobar backend, sometimes it doesn't.

This package works in conjunction with the npm package `webpack-assets-manifest` which creates
a `manifest.json` file that tells the browser to load compiled chunks when working in production mode.

Production mode can be set in newer versions of October by editing `/config/environment.php` file
and changing from `'dev'` to `'prod'` in the `'hosts'` array, depending on your host.

The other way to switch from development to production environment is by creating a `.env` file in the
root of your October CMS installation, as per instructions on [this page](https://octobercms.com/docs/setup/configuration).

Production version of the application is built by issuing a command in the `./angular` folder of the theme:

```
$ ng build --prod --extraWebPackConfig webpack.partial.js
```

The whole Angular installation is adapted so it can run both in the root or in a subdirectory of your server.

### 3. Prepare your `.htaccess`

Edit your OctoberCMS `.htaccess` file from your root project and change the line as indicated below.

From:

```
RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources)/.*
```

To:

```
RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources|app)/.*
```

Also, for security reasons, you'll need to add the following lines at the the **Block all PHP files, except index** section:

```
RewriteRule ^([0-9]+.chunk.js)$ /themes/(oc-theme-angular|rluders-angular)/app/$1 [R,L]
RewriteRule ^(themes/.*/app/index.html) - [F,L,NC]
```

It'll prevent the users to access the **themes/(theme)/app/index.html** and redirect the chunk files. Not that it will be a problem, but it's just not nice.

## Using it

Well, this template is just a mockup for you to create your own template. So, in this case, you will probably need to know how to use it.

We are talking about theme development. So, there's no easy way to do it. You'll keep in mind that it's necessary to learn how [angular-cli](https://cli.angular.io/) works and also, sometimes execute it's commands to build your application.

For now, what you need to know is that your angular application is inside the `./angular` folder, inside your theme folder. And all your `angular-cli` commands will start from there.

An example, to build your application and keep it in the watcher:

```
$ ng build --watch
```

After that, you'll notice that we created an `./app` folder on your theme root. It's means that your angular application is compiled and, for now, everything is file.

You'll never need to change nothing insite the `./app` folder. 'Cause it's gonna be created for our angular-cli command. All yours implementation'll happend inside the `./angular/src` folder, as a normal `angular-cli` generated application.

Don't forget to download the dependencies inside the `./angular` folder. I recommend that you use `yarn` dependency manager, It's better than `npm`.

To download the angular dependencies you can use:

`yarn install` or `npm install`

If you have any problems or questions, feel free to ask for help.

## Support

If you like my job and you want to support it, please, consider to support me.

[![Beerpay](https://beerpay.io/rluders/oc-theme-angular2/badge.svg?style=beer-square)](https://beerpay.io/rluders/oc-theme-angular2)  [![Beerpay](https://beerpay.io/rluders/oc-theme-angular2/make-wish.svg?style=flat-square)](https://beerpay.io/rluders/oc-theme-angular2?focus=wish)
