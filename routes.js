// Configure the default routes for layout, loading, and not found
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});
// Initialize the loading template before hand
Router.onBeforeAction('loading');
// Map the routes
Router.map(function() {
  // Homepage
  this.route('home', {
    path: '/'
  });
  this.route('contact', {
    path: '/contact',
    // Reset session data for contact form when they leave the page
    onStop: function() {
      Session.set('formSubmitted', false);
      Session.set('formError', false);
    }
  });
  // Test Restricted Access
  this.route('profile', {
    path: '/profile',
    template: 'home',
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });
  // Test route to demonstrate a slow connection
  this.route('slow', {
    path: '/slow',
    template: 'home',
    waitOn: function() {
      return Meteor.subscribe('testPub');
    }
  })
  // 404
  this.route('notFound', {
    path: '*'
  });
});
