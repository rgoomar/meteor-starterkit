# Meteor Starter Kit
This is a base set of files and packages included to help kickstart your development process.

## Note
This repository is outdated and will no longer be maintained. There are similar projects out there and I believe it is a better decision to help improve another collaboratively. For a more up-to-date starter kit, check out [Meteor Boilerplate](https://github.com/Differential/meteor-boilerplate)

[![Code Climate](https://codeclimate.com/github/rgoomar/meteor-starterkit/badges/gpa.svg)](https://codeclimate.com/github/rgoomar/meteor-starterkit)

## Demo
You can view the demo on [starterkit.meteor.com](http://starterkit.meteor.com/)  
or view it in different screen sizes [here](http://ami.responsivedesign.is/?url=http://starterkit.meteor.com)

## Packages Included

* accounts-base
* accounts-password
* iron-router
* iron-router-progress
* less
* spiderable
* accounts-entry
* underscore
* jquery
* bootstrap-validator
* Spin
* contactform

## File Structure
```
.meteor/ (You can guess what this is for)

client/
  styles/ (Global Styles)
    bootstrap/ (bootstrap 3 LESS files)
    ionic/ (ionic icons LESS files)
    animations.css
    mixins.import.less
    styles.less
    variables.import.less
    global.import.less
  views/ (All template-specific html, less, and javascript files)
    contact/
      contact.html
    home/
      home.html
    includes/ (Reusable templates for overall structure)
      footer.html
      header.html
      header.js
      loading.html
      notFound.html
    index.html
  subscriptions.js (Define what data you are going to subscribe to from the server)
  accounts.js (AccountsEntry configuration)

collections/ (Model Definitions)
  test.js (Test collection to show an example of a slow connection)

public/
  fonts/ (Ionic Fonts)

server/
  publications.js (Define what data you going to publish to the client)

routes.js (Iron-router routes)
```

## Functionality & Components Included
* Basic User Accounts
* Contact Form (with [validation](http://bootstrapvalidator.com/))
* Bootstrap LESS
* File structure and LESS structure to work off
* Basic  Navigation Menu
* Mobile Nav Menu with CSS3
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

You should have [Meteor](http://meteor.com) installed then follow these steps:

1. Clone the repository locally
2. run ```meteor```

## But... what about X

If you have something that you would like added, please open up an issue or even a pull request directly.
I am open to suggestions.
