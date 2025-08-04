////////////////////
// sidebar js
////////////////
$(document).ready(function () {
    const toggleSidebar = () => {
      $("body").toggleClass("collapsed");
    //   $(".main_content").toggleClass("collapsed");
      $(".toggle_menu i").toggleClass("fa fa-angle-left fa fa-angle-right");
    };
    // Toggle sidebar on button click
    $(".toggle_menu").click(function () {
      toggleSidebar();
    });
    // Add 'collapsed' class below 992.5 screen width
    $(window)
      .on("resize", function () {
        if ($(window).width() < 1024.5) {
          $("body").addClass("collapsed");
          
        } else {
          $("body").removeClass("collapsed");
        //   $(".main_content").removeClass("collapsed");
        }
      })
      .resize(); // Trigger the resize event on page load
    // Change classes for 'fa fa-angle-left' and 'fa fa-angle-right'
    $(window)
      .on("resize", function () {
        if ($(window).width() < 1024.5) {
          $(".toggle_menu i")
            .removeClass("fa fa-angle-left")
            .addClass("fa fa-angle-right");
        } else {
          $(".toggle_menu i")
            .removeClass("fa fa-angle-right")
            .addClass("fa fa-angle-left");
        }
      })
      .resize(); // Trigger the resize event on page load
  });



  document.addEventListener('show.bs.offcanvas', function () {
    // Hide elements when offcanvas is shown
    document.querySelectorAll('.slick-arrow').forEach(function (element) {
      element.style.visibility = 'hidden';
    });
  
    document.querySelectorAll('.form-floating label').forEach(function (label) {
      label.style.visibility = 'hidden';
    });
  });
  
  document.addEventListener('hide.bs.offcanvas', function () {
    // Show elements when offcanvas is hidden
    document.querySelectorAll('.slick-arrow').forEach(function (element) {
      element.style.visibility = 'visible';
    });
  
    document.querySelectorAll('.form-floating label').forEach(function (label) {
      label.style.visibility = 'visible';
    });
  });