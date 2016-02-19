(function ($) {
  module('jQuery#sharePopups', {
    setup: function () {
      this.shareBtns = $('[data-share]');
    }
  });

  test('This is always true', function () {
    expect(1);
    strictEqual(1, 1, 'always true');
  });

}(jQuery));
