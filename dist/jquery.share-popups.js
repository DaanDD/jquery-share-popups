/*! share-popups - v1.0.0 - 2016-03-10
* Copyright (c) 2016 Daan De Deckere; Licensed MIT */
(function ($) {
  function SharePopups () {
    this.init();
  }

  $.extend(SharePopups.prototype, {
    init: function () {
      return $('[data-share]').on('click', function(event) {
        this.clickShare(event);
      }.bind(this));
    },
    clickShare: function(event) {
      event.preventDefault();
      var $element = $(event.target);

      try {
        window.open(this.getShareUrl($element), '', this.getPopupParams());
      }
      catch (error) {
        console.error(error);
      }
    },
    getShareUrl: function($element) {
      var sharer = this.getSharer($element);
      return sharer.shareUrl + '?' + this.getSharerParams(sharer);
    },
    getSharer: function($element) {
      var url = $element.data('url') || window.location.href;
      var share = $element.data('share');
      var sharers = {
        facebook: {
          shareUrl: 'https://www.facebook.com/sharer/sharer.php',
          params: {
            u: url
          }
        },
        twitter: {
          shareUrl: 'https://twitter.com/intent/tweet',
          params: {
            url: url,
            text: $element.data('text'),
            hashtags: $element.data('hashtags'),
            via: $element.data('via')
          }
        },
        linkedin: {
          shareUrl: 'https://www.linkedin.com/shareArticle',
          params: {
            url: url,
            mini: true
          }
        },
        googleplus: {
          shareUrl: 'https://plus.google.com/share',
          params: {
            url: url
          }
        }
      };

      if (sharers[share]) {
        return sharers[share];
      } else {
        throw "Sharer not found";
      }
    },
    getSharerParams: function(sharer) {
      return Object.keys(sharer.params)
      .filter(function(key) {
        if(typeof sharer.params[key] === 'undefined') {
          return false;
        }
        return true;
      })
      .map(function(key) {
        return key + '=' + encodeURIComponent(sharer.params[key]);
      }).reduce(function(previous, current) {
        return previous + '&' + current;
      });
    },
    getPopupParams: function() {
      var width  = 575,
          height = 400,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2;

      return 'status=1' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;
    }
  });

  $(function() {
    new SharePopups();
  });

}(jQuery));
