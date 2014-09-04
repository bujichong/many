define('forces/dom', ['forces/query', 'forces/string'], function(query, string) {

  var force = {

    'byId': query['byId'],

    'byTag': query['byTag'],

    'byClass': query['byClass'],

    'hasClass': function(node, cls) {
      var filter = new RegExp("(^|\\s)" + cls + "(\\s|$)");
      return filter.test(string.lower(node.className));
    },

    'addClass': function(node, cls) {
      if(!this.hasClass(node, cls)) {
        node.className = string.trim((node.className + ' ' + cls).replace(/\s\s+/, ' '));
      }
      return node;
    },

    'removeClass': function(node, cls) {
      if(this.hasClass(node, cls)) {
        node.className = string.trim((' ' + node.className + ' ').replace(' ' + cls + ' ', ' ').replace(/\s\s+/, ' '));
      }
      return node;
    }

  };

  return force;

});