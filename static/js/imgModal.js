$(function() {
        $('.pop').on('click', function(evt) {
            evt.preventDefault()
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
        });     
});