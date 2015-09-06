$(document).ready(function() {
  // navigation click actions
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
  //fancybox
  $(".fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers: {
      title : {
        type : 'over'
      },
      overlay: {
        locked: false
      }
    }
  });

  $(".fancybox-thumb").fancybox({
    prevEffect  : 'elastic',
    nextEffect  : 'elastic',
    helpers : {
      thumbs  : {
        width : 50,
        height  : 50
      },
      overlay: {
        locked: false
      }
    }
  });


  Parse.initialize("BUEctKpH8LLaC73et3hOLnixZeRJwZKTHNkQwZIB", "zFNMHOFluzK24PUrUNIu8C12vFYWq5MEOhgBfIma");

  // Error Test
  // Parse.initialize("BUEctKpH8LLaC73et3hOLnixZeRJwZKTkQwZIB", "zFNMHOFluzK24PUrUNIu8C12vFYWq5MEOhgBfa");

  $('#send_rsvp').on('click', function (event) {
    var name = $('#username').val();
    var phone= $('#cellphone').val();
    var radio= $('input[name=desireRadios]:checked', '#myForm').val();
    var addr = $('#address').val();
    var people = $('#people').val();
    var vegetables = $('#vegetables').val();
    var children = $('#children').val();
    var note = $('#note').val();
    console.log(name+","+phone+","+radio+","+addr);
    console.log(people+","+vegetables+","+children+","+note);

    var RSVPObject = Parse.Object.extend("RSVPObject");
    var rsvpObject = new RSVPObject();
    rsvpObject.set("name", name);
    rsvpObject.set("phone", phone);
    rsvpObject.set("attend_status", radio);
    rsvpObject.set("address", addr);
    rsvpObject.set("people", people);
    rsvpObject.set("vegetables", vegetables);
    rsvpObject.set("children", children);
    rsvpObject.set("note", note);

    rsvpObject.save(null, {
      success: function(rsvpObject) {
        // Execute any logic that should take place after the object is saved.
        // alert('New object created with objectId: ' + rsvpObject.id);
        swal("感謝您！", "謝謝您的祝福！", "success");
        $('#rsvp_form').hide();
      },
      error: function(rsvpObject, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        // alert('Failed to create new object, with error code: ' + error.message);
        swal({
          title: "表單出了點問題!",
          text: "麻煩您重新到 <a href='https://docs.google.com/forms/d/1lXX6clG_ZQOelqtEz0N4t9va0_Ov8a8xDq7ufSnKtcw/viewform' target='_blank'>Googl表單</a> 填寫，謝謝！.",
          html: true,
          type: "error"});
      }
    });
  });
});
// scroll function
function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

$(function() {
  $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 1100,             // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    nav: true,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: false,    // Boolean: Pause when hovering controls, true or false
    prevText: "",   // String: Text for the "previous" button
    nextText: "",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "centered-btns",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });
});