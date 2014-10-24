angular.module('chartbook')
  .service('KeyboardService', ['$document', function($document) {

    var keyboardMap = {
      37: -1,
      39: 1
    };

    this.init = function() {
      var self = this;
      this.keyEventHandlers = [];
      $document.bind('keydown', function(event) {
        var key = keyboardMap[event.which];

        if (key) {
          // An interesting key was pressed
          event.preventDefault();
          self._handleKeyEvent(key, event);
        }
      });
    };

    this._handleKeyEvent = function(key, event) {
      var callbacks = this.keyEventHandlers;
      if (!callbacks) {
        return;
      }

      event.preventDefault();
      if (callbacks) {
        for (var x = 0; x < callbacks.length; x++) {
          var cb = callbacks[x];
          cb(key, event);
        }
      }
    };

    this.on = function(cb) {
      this.keyEventHandlers.push(cb);
    };

  }]);