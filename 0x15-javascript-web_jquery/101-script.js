/*
a Javascript script that adds, removes and clears LI elements from a list when the user clicks
The new element must be: <li>Item</li>
The new element must be added to UL.my_list
When the user clicks on DIV#add_item: a new element is added to the list
When the user clicks on DIV#remove_item: a last element is removed to the list
When the user clicks on DIV#clear_list: all elements of the list are removed
*/
$(() => {
  $('#add_item').click(() => {
    $('ul.my_list').append('<li>Item</li>');
  });
  $('#remove_item').click(() => {
    const ul = $('ul.my_list li');
    if (ul.length > 0) {
      ul[ul.length - 1].remove();
    }
  });
  $('#clear_list').click(() => {
    $('ul.my_list').empty();
  });
});
