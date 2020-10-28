function toggleDarkMode() {
        var iteration = $(this).data('iteration')||1
        switch (iteration) {
            case 1:
                $("body").css({
                    "transition": "background 2s ease",
                    "background": "rgb(0, 0, 0, 0.95)",
                    "color": "white"
                })
                break;
            case 2:
                $("body").css({
                    "transition": "background 2s ease",
                    "background": "rgb(255, 255, 255, 0.95)",
                    "color": "black"
                })
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1
        $(this).data('iteration', iteration)
}

$(document).ready(function(){
    
    $('#1_block').one("click", function()
    {

    $('#holder').css({
        'opacity': '1'
    })
    $('#endless_title').css({
        'transition': 'text-shadow 4s ease',
        'text-shadow': '0 0 2px black;'
    })


    $('#endless_title').slideDown(700).delay(700).slideUp(700)
    $('#holder').html('Endless is a catalogue of work and backlog of previous projects, as well as a hub for resources I find useful and/or interesting. I wanted a platform to better explain my ideas and reasoning for personal projects, more than just what lives on Github. I wanted to have everything as a stream of ideas that were all in one place. It is updated periodically with any new projects as well as changes to old work I may have revisited.')
    })
    });

    $("#holder").live("click", function(){
        $(".parentblock").css({
            "cursor": "default"
        });
        $("#home").animate({
            "opacity": "1"
        }, 2000)
        $("#darkmode").animate({
            "opacity": "1"
        }, 2000)
        $("#1_block").animate({
            "opacity": "0"
        }, 2);
        setTimeout(function() {
            $("#1_block").remove();
            $('#endless_title').remove();
            $('#holder').remove();
        }, 200);
        $("#parent").animate({
            "height": "50%",
            "width": "85%"
        }, 2000);
        $("#parent").animate({
            "height": "80%"
        }, 2000);
        $("#parent").addClass("scrollable")
        setTimeout(function() {
            $.getJSON('./js/data.json', function(data) {
                $.each(data.projects, function(_, e) {
                    $('#parent').append('<div class="project flex flex-wrap -mx-4"><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><h2 id="projectname" class="mb-2 glow">' + e.project + '</h2><a href="' + e.link + '"target="_blank">' + e.link + '</a></div><div class="ipad mb-4 md:mb-0 px-4 w-full md:w-1/3">' + e.description + '</div><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><img src="' + e.preview + '" alt="preview"</div></div>');
                });
        }, 40000);
        });
});

