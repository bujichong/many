require(['forces/dom.min', 'forces/xhr.min', 'front.js/front.min'], function(dom, xhr, front) {

  var tmpl = '<div class="cell" style="background:{{bg}}">{{letter}}</div>';
  var node = dom.byId('node');

  xhr.get('demo.json', function(data) {
    front.render(tmpl, data, node);
    dom.addClass(node, 'rainbow');
    dom.byId('title').innerHTML = 'force.js / ' + front.render('{{letter}}', data);
  });

});