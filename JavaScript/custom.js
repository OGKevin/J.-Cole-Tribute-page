$(function () {
  function hideMain() {
    $("#mainDiv").fadeOut('slow', function() {

    });

  }
  function hideAll() {
    $("#comeup, #thewarmup, #FDL, #sideline, #sinner, #truly, #FHD, #eyez").fadeOut('fast', function() {
      console.log("Hiden");

    });}
  hideAll();

  // NOTE: begining sidebar actions
  $("#homeSide").click(function(event) {
    hideAll();
    $("#wrap").css('background-image', 'url("images/j_cole_final_by_sbm832-d96e2ll.jpg")');
    $("#mainDiv").fadeIn('fast', function() {

    });
    console.log("homeBtn");
  });

  $("#comeUpSide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://4.bp.blogspot.com/_zhTSVuwwoNE/TF-hmiqYZbI/AAAAAAAAAEY/Z0pj06Njt0Q/s1600/The+Come+Up+(Hosted+By+DJ+On+Point)+3.jpg")');
    $("#comeup").fadeIn('fast', function() {

    });
    console.log("ComeUpBtn");
  });

  $("#theWarmUpSide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://static.vibe.com/files/article_images/J-Cole-The-Warm-Up.jpg")');
    $("#thewarmup").fadeIn('fast', function() {

    });
    console.log("theWarmUpBtn");
  });

  $("#trulySide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/9/98/Cole-Truly-Yours.jpeg")');
    $("#truly").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });

  $("#FDLside").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://bespokemag.co.uk/wp-content/uploads/2015/11/fnl.jpg")');
    $("#FDL").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });

  $("#sideLineSide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://images.rapgenius.com/3cgkifu1zzc0hjclvad6k1tov.1000x1000x1.jpg")');
    $("#sideline").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });

  $("#sinnerSide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://beginningandend.com/wp-content/uploads/2013/06/J-Cole-Born-Sinner-Devil-Head-Illuminati-Satanic-Sybolism.jpg")');
    $("#sinner").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });

  $("#FHDside").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("https://images.genius.com/7154c6dafd6f6f883c099f033a4aa5e3.1000x1000x1.jpg")');
    $("#FHD").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });

  $("#eyezSide").click(function(event) {
    hideAll();
    hideMain();
    $("#wrap").css('background-image', 'url("http://images.complex.com/complex/images/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/ac3nmltstl8jucpbibtb/j-cole-4-your-eyez-only-cover-art")');
    $("#eyez").fadeIn('fast', function() {

    });
    console.log("trulySideImg");
  });


  // NOTE: end sidebar


// NOTE: scrolling currently trash

  /*$("#mainDiv").on( 'DOMMouseScroll mousewheel', function ( event ) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('2000', function() {});
      $("#comeup").show('slow', function() {

    console.log('Down');
  })} else {
      //scroll up
      console.log('Up');
    }
  //prevent page fom scrolling
  return false;
  });

  $("#comeup").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#thewarmup").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#mainDiv").show('slow', function() {});
        console.log("up");
      }
      return false;

    });

  $("#thewarmup").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#FDL").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#comeup").show('slow', function() {});
        console.log("up");
      }

    });
  $("#FDL").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#sideline").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#thewarmup").show('slow', function() {});
        console.log("up");
      }

    });
  $("#sideline").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#truly").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#FDL").show('slow', function() {});
        console.log("up");
      }

    });
  $("#truly").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#FHD").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#sideline").show('slow', function() {});
        console.log("up");
      }

    });
  $("#FHD").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      $(this).hide('slow', function() {});
      $("#eyez").show('slow', function() {
      });
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#truly").show('slow', function() {});
        console.log("up");
      }

    });
  $("#eyez").on('DOMMouseScroll mousewheel', function(event) {
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
      console.log("Down");
    } else {
        $(this).hide('slow', function() {});
        $("#FHD").show('slow', function() {});
        console.log("up");
      }

    });*/

});
