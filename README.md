<p align="center">
  <img src="https://github.com/rluders/oc-theme-angular/blob/master/assets/image.png" style="border:1px solid #ddd;width:auto;">
</p>

<p align="center">
  <a href="https://travis-ci.org/rluders/oc-theme-angular">
    <img src="https://travis-ci.org/rluders/oc-theme-angular.svg?branch=master">
  </a>
  <a href="https://octobercms.com/theme/rluders-angular2">
    <img src="https://img.shields.io/badge/OctoberCMS-Theme-%23EE7203.svg">
  </a>
  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2FHDXT4QTD7RA&source=url">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg">
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
    <img src="https://img.shields.io/github/license/rluders/oc-theme-angular.svg">
  </a>
</p>

> ⚠️ **Warning**: This theme is outdated and it will be replaced by the one that now lives on the **develop** branch, that upgrades it to *Angular 8 LTS*. If you want to use it, be awared that it's not compatible with my JWTAuth plugin anymore, and you probably will need to make some adjusts before use it. As well, this theme has now some  vulnerabilities caused by some dependencies. If you really need to use it, I strongly recommend you to use the version that lives on **develop** branch, and please, report and issues. 

## Requirements

This theme is using **Angular 8 LTS**.

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


# Known issues

Beside the fact that I'm always trying to solve the possible issues, bad things could happen.
If you find anything and you need help, or you know how to solve it, please, feel free to submit a hotfix or even add the workaround to this README file.

# License

MIT
