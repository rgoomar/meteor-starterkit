// Add in mobile nav menu events
Template.header.events({
  'click .toggle-nav': function() {
    if ($('#site-wrapper').hasClass('show-nav')) {
      $('#site-wrapper').removeClass('show-nav');
    } else {
      $('#site-wrapper').addClass('show-nav');
    }
    return false;
  },
  'click #site-menu a': function(e) {
    if ($('#site-wrapper').hasClass('show-nav')) {
      $('#site-wrapper').removeClass('show-nav');
    }
  }
});

Template.header.rendered = function() {
  $('html').click(function(e) {
    if ($('#site-wrapper').hasClass('show-nav')) {
      $('#site-wrapper').removeClass('show-nav');
    }
  });
};
