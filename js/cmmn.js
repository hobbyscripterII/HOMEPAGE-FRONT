$(function () {
  let currentUrl = window.location.href;

  $('nav a').each((idx, item) => {
    let linkUrl = $(item).attr('href');
    
    if(currentUrl.includes(linkUrl) && linkUrl != '') {
      $(item).addClass('active');
    }
  });

  $(window).scroll(function () {
    let winTop = $(window).scrollTop();
    
    if (winTop >= 200) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
})

function formattedDate(str) {
  let date = new Date(str);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let result = `${year}.${month}.${day}`;

  return result;
}