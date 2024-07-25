$(document).ready(function(){
    $('#searchIcon').on('click', function(){
        $('#searchInput').toggle();
    });

    $('#searchInput').on('input', function(){
        var search = $(this).val().toLowerCase();

        $('.card').each(function() {
            var itemName = $(this).find('#nama').text().toLowerCase();

            if (itemName.includes(search)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });
})