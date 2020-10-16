$(document).ready(function(){
    $('#1_block').one("click", function()
    {
    
    $("#1_block").attr("id", "#2_block")
    $('#holder').css({
        'opacity': '1',
    })
    
    $('#endless_title').slideDown(700).delay(700).slideUp(700)
    
    $('#holder').html('Endless is a catalogue of work and backlog of previous projects, as well as a hub for resources I find useful and/or interesting. I wanted a platform to better explain my ideas and reasoning for personal projects, more than just what lives on Github. I wanted to have everything as a stream of ideas that were all in one place. It is updated periodically with any new projects as well as changes to old work I may have revisited.')
    })
    });

    

    
function toEndless() {
    $('#holder').css({
        'opacity': '0;'
    });
    console.log("take me away from here")




}
// <body>
//     <main class="container py-4 px-4 mx-auto my-12">
//     </main>

// <script>
//     $(function() {
//         console.log("function exec")
//         $.getJSON('./js/data.json', function(data) {
//             $.each(data.projects, function(_, e) {
//                 $('main').append('<div class="project flex flex-wrap -mx-4"><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><h2 class="text-2xl mb-2">' + e.project + '</h2><a href="' + e.link + '"target="_blank">' + e.link + '</a></div><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3">' + e.description + '</div><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><img src="' + e.imageone + '" alt="Code snippet"><br><img src="' + e.imagetwo + '" alt=""</div></div>');
//             });
//         });
//     });
// </script>
// </body>
