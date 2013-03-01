//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require jquery.ui.nestedSortable
//= require_self
//= require_tree .

jQuery(document).ready(function() {
  $("#categories").nestedSortable({
    listType: 'ul',
    opacity: 0.6,
    handle: '.handle',
    items: 'li',
    toleranceElement: '> div',
    update: function(event, ui) {
      var mylist = $('#categories').sortable('serialize');
      var mylist = mylist.replace(/root/g, '');
      var finalstring = '';
      $(mylist.split("&")).each(function(index) {
        string2 = this.split("[");
        type = string2[0];
        string3 = string2[1].split("]");
        id = string3[0];
          fragments = this.split('=');
          var parent_id = fragments[1];
          finalstring = finalstring + type + '[' + index + ']' + '[id]=' + id + '&' + type + '[' + index + '][parent_id]=' + parent_id + '&' + type + '[' + index + '][position]=' + index + '&';
      });
      $.post("/categories/sort", finalstring);
    }
  });
});
