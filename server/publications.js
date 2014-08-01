// This is where your Meteor publications will go
// http://docs.meteor.com/#meteor_publish

// Test publication
Meteor.publish('testPub', function() {
  // Sleep for 3 seconds
  Meteor._sleepForMs(3000);
  // Then let's find it
  return Test.find();
});
