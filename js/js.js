$(document).ready(function(){
     $('#register').click(function() {
        $.ajax({
            url: 'http://rap2api.taobao.org/app/mock/2815/POST/test1',
            type: 'POST',
            dataType: 'json',
            data: {'email':$('#email').val()},
            success : function(result) {
                console.log(result);
            }
            error : function(result) {
                console.log(result);
            };
        })
        console.log('1')
     });
});