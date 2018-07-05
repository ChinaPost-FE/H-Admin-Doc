$(document).ready(function () {

  $('.summernote').summernote({
      lang: 'zh-CN'
  });

});
var edit = function () {
  $("#eg").addClass("no-padding");
  $('.click2edit').summernote({
      lang: 'zh-CN',
      focus: true
  });
};
var save = function () {
  $("#eg").removeClass("no-padding");
  var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
  $('.click2edit').destroy();
};