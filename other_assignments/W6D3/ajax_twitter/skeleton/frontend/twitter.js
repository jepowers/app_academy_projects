const FollowToggle = require('./follow_toggle.js');

$(function () {
  $('button.follow-toggle').each( (i, button) => new FollowToggle(button, {}) );
});
