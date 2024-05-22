$(document).ready(function () {
    $(".reviews_list").slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="arrow_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="arrow_right.png"></button>',
    });
  
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
    $(".icon__main").click(function () {
      $("#ul").slideToggle();
    });
    /* timer */
  
    function update() {
      var Now = new Date(),
        Finish = new Date();
      Finish.setHours(23);
      Finish.setMinutes(59);
      Finish.setSeconds(59);
      if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
        Finish.setDate(Finish.getDate() + 1);
      }
      var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
      var hrs = Math.floor(sec / 3600);
      sec -= hrs * 3600;
      var min = Math.floor(sec / 60);
      sec -= min * 60;
      $(".timer .hours").html(pad(hrs));
      $(".timer .minutes").html(pad(min));
      $(".timer .seconds").html(pad(sec));
      setTimeout(update, 200);
    }
    function pad(s) {
      s = ("00" + s).substr(-2);
      return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
    }
    update();
  });
  
  (function setDate() {
    let d = new Date();
    let p = new Date(d.getTime() - 5 * 86400000);
    let monthA = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    $(".by").html(p.getDate() + " " + monthA[p.getMonth()] + " ");
  
    p = new Date(d.getTime());
    $(".to").html(p.getDate() + " " + monthA[p.getMonth()] + " " + p.getFullYear() + " года");
  })();
  
  function openModalView() {
    Swal.fire({
      title: "Оставьте отзыв",
      html:
        '<div > <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
        '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
      confirmButtonText: "Отправить отзыв",
    }).then(() => {
      Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
    });
  }
  