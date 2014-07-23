Template.header.events({
  // Fix for mobile nav bar staying when switching routes
  'click ul.nav > li > a' : function() {
    $('.collapse.in').collapse('hide');
  },
  'click a.navbar-brand' : function() {
    $('.collapse.in').collapse('hide');
  }
});
