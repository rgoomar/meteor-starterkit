Meteor.startup(function() {
  // Client-side Configuration for AccountsEntry package
  AccountsEntry.config({
    // Ensure we have both username and email available
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
});
