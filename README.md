# Meteor Starter Kit
This is a base set of files and packages included to help kickstart your development process.

## Packages Included

* [accounts-base](http://docs.meteor.com/#accountsui)
* [accounts-password](http://docs.meteor.com/#accountsui)
* [iron-router](https://atmospherejs.com/package/iron-router)
* [iron-router-progress](https://atmospherejs.com/package/iron-router-progress)
* [less](http://docs.meteor.com/#less)
* [email](http://docs.meteor.com/#email)
* [spiderable](http://docs.meteor.com/#spiderable)
* [font-awesome](https://atmospherejs.com/package/font-awesome)
* [bootstrap3-less](https://atmospherejs.com/package/bootstrap3-less)
* [accounts-entry](https://atmospherejs.com/package/accounts-entry)
* [underscore](http://docs.meteor.com/#underscore)
* [jquery](http://docs.meteor.com/#jquery)
* [Bootstrap-Validator](https://atmospherejs.com/package/Bootstrap-Validator)
* [Spin](https://atmospherejs.com/package/spin)

## File Structure
```
.meteor/ (You can guess what this is for)

client/
  accounts/ (Accounts package configuration)
    accounts.js
  compatibility/ (Extra libraries)
    animate.css
    jasny-bootstrap.min.css
    jasny-bootstrap.min.js
  styles/ (Global Styles)
    mixins.import.less
    style.less
    variables.import.less
  views/ (All template-specific html, less, and javascript files)
    contact/
      contact.html
      contact.js
    home/
      home.html
    includes/ (Reusable templates for overall structure)
      footer.html
      header.html
      header.js
      loading.html
      notFound.html
    base.html
    base.import.less
  subscriptions.js (Define what data you are going to subscribe to from the server)

collections/ (Model Definitions)
  test.js (Test collection to show an example of a slow connection)

packages/ (Directory for installed packages)

public/
  favicon.ico (Browser Favicon)

server/
  views/ (Server-side functionality for templates on the client)
    contact/
      contactForm.js (Email submission and validation)
  publications.js (Define what data you going to publish to the client)

routes.js (Iron-router routes)
```

## Functionality & Components Included
* Basic User Accounts
* Contact Form (with [validation](http://bootstrapvalidator.com/))
* Bootstrap LESS along with [Jasny Bootstrap](http://jasny.github.io/bootstrap/) extension
* File structure and LESS structure to work off
* Basic Fixed Navigation Menu
* Mobile Navigation Menu Fix for Bootstrap (when changing routes)
* Small test route (/profile) so you can see how logged-in only pages work
* [CSS Animations](http://daneden.github.io/animate.css/) which can come in handy for [customized page transitions](http://www.manuel-schoebel.com/blog/simple-page-transitions-with-iron-router-hooks)


## LESS Structure
The way I have this structured is that all LESS files get imported into the ```style.less``` file.
So, all of the files are named ```filename.import.less``` and then imported in the order it should go in.
This way, you are more organized with the order and usage of your LESS styles.

This methodology just made sense to me, but if you have a suggestion / reasoning why I should change it, please feel free to open an issue.

## Why?
So, I know there are other 'starter kits' or 'boilerplates' out there for Meteor, but I
wanted one that was a little different. That is why I created this one that is heavily influenced
by Bootstrap, but does come with some components I expect to use on newer projects.

## Installation

You should have [Meteor](http://meteor.com) and [Meteorite](https://atmospherejs.com/docs/installing) installed then follow these steps:

1. Clone the repository locally
2. run ```mrt```

## But... what about X

If you have something that you would like added, please open up an issue or even a pull request directly.
I am open to suggestions.
