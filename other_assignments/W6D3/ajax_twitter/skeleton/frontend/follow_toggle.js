const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('follow-state') || options.followState;

    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    this.$el.prop('disabled', true);

    if (this.followState === 'followed') {
       this.$el.html('Unfollow!');
    } else {
        this.$el.html('Follow!');
    }

    this.$el.prop('disabled', false);
  }

  handleClick() {
    event.preventDefault();
    console.log(this.followState);
    if (this.followState === 'unfollowed') {
      APIUtil.followUser(this.userId);
    } else {
      APIUtil.unfollowUser(this.userId);
    }
    this.followState = this.followState === 'followed' ? 'unfollowed' : 'followed';
    this.render();
  }

}

module.exports = FollowToggle;
