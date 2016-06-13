import {init as sdkInit} from 'contentful-widget-sdk';

import styles from './stylesheets/styles.scss';

+function() {
  var widget = {};

  widget.events = {
    initialize: function(api) {
      api.window.updateHeight();
      api.window.startAutoResizer();
    },
  };

  // MY NEW WIDGET LOGIC GOES HERE

  sdkInit(widget.events.initialize);
}();
