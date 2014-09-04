define('forces/math', [], function() {

  var force = {

    'add': function() {
      var sum = 0, i;
      for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    },

    'subtract': function(a, b) {
      return a - b;
    },

    'multiply': function() {
      var product = 1, i;
      for(i = 0; i < arguments.length; i++) {
        product *= arguments[i];
      }
      return product;
    },

    'divide': function(a, b) {
      return a / b;
    }

  };

  return force;

});