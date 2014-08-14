Template.header.events({
  // Fix for mobile nav bar staying when switching routes
  'click ul.nav.navmenu-nav > li > a' : function() {
    $('#myNavmenu').offcanvas('hide');
  }
});

// Site-wide Username helper
UI.registerHelper('userName', function() {
  return Meteor.user().username;
});
