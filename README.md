# Meteor Starter Kit
This is a base set of files and packages included to help kickstart your development process.

## Packages Included

* [accounts-base](http://docs.meteor.com/#accountsui)
* [accounts-password](http://docs.meteor.com/#accountsui)
* [iron-router](https://atmospherejs.com/package/iron-router)
* [less](http://docs.meteor.com/#less)
* [email](http://docs.meteor.com/#email)
* [spiderable](http://docs.meteor.com/#spiderable)
* [font-awesome](https://atmospherejs.com/package/font-awesome)
* [bootstrap3-less](https://atmospherejs.com/package/bootstrap3-less)
* [auto-nprogress](https://atmospherejs.com/package/auto-nprogress)
* [accounts-entry](https://atmospherejs.com/package/accounts-entry)
* [underscore](http://docs.meteor.com/#underscore)
* [jquery](http://docs.meteor.com/#jquery)
* [Bootstrap-Validator](https://atmospherejs.com/package/Bootstrap-Validator)


## File Structure
```
.meteor/ (You can guess what this is for)

client/
  accounts/ (Accounts package configuration)
    accounts.js
  compatability/ (Extra libraries)
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
* Contact Form (with validation)
* Bootstrap LESS along with Jasny Bootstrap extension
* File structure and LESS structure to work off
* Mobile Navigation Menu Fix for Bootstrap (when changing routes)
* Small test route (/profile) so you can see how logged-in only pages work
* [CSS Animations](http://daneden.github.io/animate.css/) which can come in handy for [customized page transitions](http://www.manuel-schoebel.com/blog/simple-page-transitions-with-iron-router-hooks)

## Why?
So, I know there are other 'starter kits' or 'boilerplates' out there for Meteor, but I
wanted one that was a little different. That is why I created this one that is heavily influenced
by Bootstrap, but does come with some components I expect to use on newer projects.

## Installation

You should have [Meteor](http://meteor.com) and [Meteorite](https://atmospherejs.com/docs/installing) installed then follow these steps:
1. Clone the repository locally
2. run ```mrt```
