$(document).ready(function(){
    $('.myform').submit(function(e){
        e.preventDefault();
        button.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending'
        $.ajax({
            type: 'POST',
            url: 'processEmail.php',
            data: $('.myform').serialize(),
            success: function(response){
                console.log(response);
                showCustomModal('Email Successfully Sent!','success')
                frmContact.reset();
                button.innerHTML='Send'
            },
            error: function(response) {
                showCustomModal('Operation Failed!','error')
                button.innerHTML='Send'
            }
        });
    });
});
