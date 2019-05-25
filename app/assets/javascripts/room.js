$(function() {
  $('#new_room_mesage').on('ajax:success', function(a, b, c){
    $(this).find('input[type="text"]').val('');
  });
});
