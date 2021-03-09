$(document).ready(function(){
    setTimeout(function() {
        $.getJSON('./js/data.json', function(data) {
            $.each(data.projects, function(_, e) {
                $('#parent').append('<div class="project flex flex-wrap -mx-4"><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><h2 id="projectname" class="mb-2 glow">' + e.project + '</h2><a href="' + e.link + '"target="_blank">' + e.link + '</a></div><div class="ipad mb-4 md:mb-0 px-4 w-full md:w-1/3">' + e.description + '</div><div class="mb-4 md:mb-0 px-4 w-full md:w-1/3"><img src="' + e.preview + '" alt="preview">');
            });
    }, 40000);
    });
});