var now = new Date();
now.setTime(now.getTime() - ((now.getTimezoneOffset()+60)*60*1000));

$('.broadcast').each(function(e){
var ss = new Date($(this).find('.broadcast__info').find('h3').attr('content'));
var se = new Date($(this).find('.broadcast__info').find('meta').attr('content'));
  if(now > ss && now < se) {
    var time = (now.getTime() - ss.getTime()) / 1000;
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    var seconds = Math.floor(time);
    window.location.href = $(this).find('.programme').attr('resource')+'#playt='+hours+'h'+minutes+'m'+seconds+'s';
  }
});