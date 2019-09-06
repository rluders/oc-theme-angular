# Angular Theme for OctoberCMS

This theme is using **Angular 8 LTS**.

## Requirements

### OctoberCMS

* [RLuders.JWTAuth](https://octobercms.com/plugin/rluders-jwtauth)
* [RainLab.User](https://octobercms.com/plugin/rainlab-user)
* [Castiron Webpackmanifest](https://github.com/webdeveric/webpack-assets-manifest)

Install **Castiron WebpackPhpManifest** package by issuing command: 

`composer require castiron/webpackassets-plugin`

in the root of your October CMS installation.

Sometimes it appears in the installed packages list in Octobar backend, sometimes it doesn't.

This package works in conjunction with the npm package `webpack-assets-manifest` which creates 
a `manifest.json` file that tells the browser to load compiled chunks when working in production mode

Production mode can be set in newer versions of October by editing `/config/environment.php` file 
and changing from `'dev'` to `'prod'` in the `'hosts'` array, depending on your host.
The other way to switch from development to production environment is by creating a `.env` file in the root of your October CMS installation, as per instructions on 
[this page](https://octobercms.com/docs/setup/configuration).

Production version of the application is built by issuing a command

`ng build --prod --extraWebPackConfig webpack.partial.js` 

in the `./angular` folder of the theme. 

The whole Angular installation is adapted so it can run both in the root or in a subdirectory of your server.

### Angular

* [angular-cli](https://cli.angular.io/)

## Configuration

Edit your October's `.htaccess` file from your root project and change the line as indicated below.   

From:    
`RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources)/.*`

To:    
`RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources|app)/.*`

Also, for security reasons, you'll need to add the following lines at the the **Block all PHP files, except index** section:   

`RewriteRule ^([0-9]+.chunk.js)$ /themes/rluders-angular2/app/$1 [R,L]`    
`RewriteRule ^(themes/.*/app/index.html) - [F,L,NC]`

It'll prevent the users to access the **themes/(theme)/app/index.html** and redirect the chunk files. Not that'll be a problem, but it's not nice.

## Using

We are talking about advanced theme development. So, there's no easy way to do it. You'll keep in mind that it's necessary to learn how [angular-cli](https://cli.angular.io/) works and also, sometimes execute it's commands to build your application.

For now, what you need to know is that your angular application is inside the `./angular` folder, inside your theme folder. And all your `angular-cli` commands will start from there.

An example, to build your application and keep it in the watcher:

``ng build --watch``

After that, you'll notice that we created an `./app` folder on your theme root. It's means that your angular application is compiled and, for now, everything is file.

You'll never need to change nothing insite the `./app` folder. 'Cause it's gonna be created for our angular-cli command. All yours implementation'll happend inside the `./angular/src` folder, as a normal `angular-cli` generated application.

Don't forget to download the dependencies inside the `./angular` folder. I recommend that you use `yarn` dependency manager, It's better than `npm`.

To download the angular dependencies you can use:

`yarn install` or `npm install`

If you have any problems or questions, feel free to ask for help.

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/rluders/oc-theme-angular2/badge.svg?style=beer-square)](https://beerpay.io/rluders/oc-theme-angular2)  [![Beerpay](https://beerpay.io/rluders/oc-theme-angular2/make-wish.svg?style=flat-square)](https://beerpay.io/rluders/oc-theme-angular2?focus=wish)
