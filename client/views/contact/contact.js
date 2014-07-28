// Set the document title for SEO
Template.contact.rendered = function(){
  document.title = 'Contact';
  $('form').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: 'Name is required'
            },
            stringLength: {
              min: 2,
              message: 'Your name is probably more than 1 character long'
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'Email is required'
            },
            emailAddress: {
              message: 'Not a valid email address'
            }
          }
        },
        message: {
          validators: {
            notEmpty: {
              message: 'Message is required'
            },
            stringLength: {
              max: 300,
              message: 'Your message must be less than 300 characters long'
            }
          }
        }
      }
  });
};
// Setup the submit event
Template.contact.events({
  'success.form.bv form' : function(event, template) {
    $('button[type=submit]').prop('disabled',true);
    event.preventDefault();
    // Grab the data
    var name = template.find('input[name=name]').value;
    var email = template.find('input[name=email]').value;
    var message = template.find('textarea[name=message]').value;
    var data = {
      name: name,
      email: email,
      message: message
    };
    // Call server function to send the data to be emailed
    Meteor.call('sendEmail', data, function (err){
      if (err) {
        // Something went wrong :(
        Session.set('formError', true);
        $('button[type=submit]').prop('disabled',false);
      } else {
        // Let them know it was submitted
        Session.set('formSubmitted', true);
      }
    });
  }
});

Template.contact.formSubmitted = function() {
  return Session.get('formSubmitted');
};

Template.contact.formError = function() {
  return Session.get('formError');
};
