var vowelTest = (function() {
    var re = /^[aeiou]$/i;
    return function(s) {
      return re.test(s);
    };
  })();
  vowelTest('a');
  