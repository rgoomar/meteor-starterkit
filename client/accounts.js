// Setup correct redirect routes for the sign-in and sign-up forms
Meteor.startup(function() {
  AccountsEntry.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    homeRoute: '/',
    dashboardRoute: '/'
  });
});
