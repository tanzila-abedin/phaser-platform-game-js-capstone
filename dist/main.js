/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');
    }

    function update ()
    {
    }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlDQUFpQztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGFzZXItcGxhdGZvcm0tZ2FtZS1qcy1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgc2NlbmU6IHtcbiAgICAgICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXG4gICAgICAgICAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcblxuICAgIGZ1bmN0aW9uIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za3kucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJ2Fzc2V0cy9zdGFyLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvbWInLCAnYXNzZXRzL2JvbWIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsICdhc3NldHMvZHVkZS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDggfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlICgpXG4gICAge1xuICAgICAgICB0aGlzLmFkZC5pbWFnZSg0MDAsIDMwMCwgJ3NreScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSAoKVxuICAgIHtcbiAgICB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=