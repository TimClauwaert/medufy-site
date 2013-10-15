$(document).ready(function() {
  var $window = $(window);

  $window.resize(function() {
    var selectors = [
      '.header',
    ].join(', ');

    $(selectors).height($window.height());
  });

  $window.trigger('resize');
});
