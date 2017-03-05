# Angular 2 Theme for OctoberCMS

## Requirements


### OctoberCMS

* [RLuders.JWTAuth]()
* [RainLab.User]()

### Angular2

* [angular-cli](https://cli.angular.io/)

## Configuration

Edit your October's `.htaccess` file from your root project and change the line as indicated below.   

From:    
`RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources)/.*`

To:    
`RewriteCond %{REQUEST_FILENAME} !/themes/.*/(assets|resources|app)/.*`

Also, for security reasons, you'll need to add the following lines at the the **Block all PHP files, except index** section:   

`RewriteRule ^([0-9]+.chunk.js)$ /themes/angular2/app/$1 [R,L]`    
`RewriteRule ^(themes/.*/app/index.html) - [F,L,NC]`

It'll prevent the users to access the **themes/(theme)/app/index.html** and redirect the chunk files. Not that'll be a problem, but it's not nice.

## Using

We are talking about advanced theme development. So, there's no easy way to do it. You'll keep in mind that it's necessary to learn how [angular-cli](https://cli.angular.io/) works and also, sometimes execute it's commands to build your application.

For now, what you need to know is that yout angular application is inside the `./angular` folder, inside your theme. And all your `angular-cli` commands will start from there.

An example, to build your application and keep it in the watcher:

``ng build --watch``

After that, you'll notice that we created an `./app` folder on your theme root. It's means that your angular application is compiled and, for now, everything is file.

You'll never need to change nothing insite the `./app` folder. 'Cause it's gonna be created for our angular-cli command. All yours implementation'll happend inside the `./angular/src` folder, as a normal `angular-cli` generated application.

If you have any problems or questions, feel free to ask for help.
