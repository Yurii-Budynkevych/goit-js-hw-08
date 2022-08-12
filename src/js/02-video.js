import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);
player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data;
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(time.seconds)
    );
  }, 2000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
