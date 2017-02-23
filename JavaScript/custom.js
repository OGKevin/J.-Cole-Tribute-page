$(function() {
    var info = (function() {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "./JavaScript/info.json",
                'dataType': "json",
                'success': function(data) {
                    json = data;
                }
            });
            return json;
        })(),
        i = 0;

    function hideMain() {
        $("#mainDiv").fadeOut();
    };

    function changePage(infoNR) {
        $("#albumDiscription").html(info[infoNR].discription);
        $("#alnumTitle").html(info[infoNR].title);
        $("#albumArt").attr("src", info[infoNR].AlbumArtUrl);
        $("#albumArt").attr("alt", info[infoNR].title + " IMG");
        $("#iframe").attr("src", info[infoNR].embendedPlayer);
        $(".wikiLink").attr('href', info[infoNR].wikiLink);
    }
    // NOTE: begining sidebar actions
    $("#homeSide").click(function(event) {
        $("#wrap").css('background-image', 'url("images/j_cole_final_by_sbm832-d96e2ll.jpg")');
        $("#mainDiv").fadeIn("slow", function() {});
        $("#info").css('visibility', 'hidden');
    });
    $("#comeUpSide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://4.bp.blogspot.com/_zhTSVuwwoNE/TF-hmiqYZbI/AAAAAAAAAEY/Z0pj06Njt0Q/s1600/The+Come+Up+(Hosted+By+DJ+On+Point)+3.jpg")');
        hideMain();
        changePage(0);
    });
    $("#theWarmUpSide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://static.vibe.com/files/article_images/J-Cole-The-Warm-Up.jpg")');
        changePage(1);
        hideMain();
    });
    $("#trulySide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/9/98/Cole-Truly-Yours.jpeg")');
        changePage(5);
        hideMain();
    });
    $("#FDLside").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://bespokemag.co.uk/wp-content/uploads/2015/11/fnl.jpg")');
        changePage(2);
        hideMain();
    });
    $("#sideLineSide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://images.rapgenius.com/3cgkifu1zzc0hjclvad6k1tov.1000x1000x1.jpg")');
        changePage(3);
        hideMain();
    });
    $("#sinnerSide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://beginningandend.com/wp-content/uploads/2013/06/J-Cole-Born-Sinner-Devil-Head-Illuminati-Satanic-Sybolism.jpg")');
        changePage(4);
        hideMain();
    });
    $("#FHDside").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("https://images.genius.com/7154c6dafd6f6f883c099f033a4aa5e3.1000x1000x1.jpg")');
        changePage(6);
        hideMain();
    });
    $("#eyezSide").click(function(event) {
        $("#info").css('visibility', 'visible');
        $("#wrap").css('background-image', 'url("http://dreamville.com/wp-content/uploads/2016/12/4UEO_Cvr-e1480572866398.jpg")');
        changePage(7);
        hideMain();
    });
    // NOTE: end sidebar
});
