const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // do something
            if(entry.target.classList.contains('hidden')) {
                entry.target.classList.add('active');
                //entry.target.classList.remove('hidden');
            }

            if(entry.target.classList.contains('hidden-text')) {
                entry.target.classList.add('active-text');
                //document.body.background = "background-image: linear-gradient(white, black)";
                if(entry.target.id === 'transition'){
                    $('body').addClass('bg-cool');
                    $('#social_media').hide();
                    //$('#img1').hide();
                }

            }else{
                entry.target.classList.remove('active-text');

            }
            if (entry.target.id ==='nobg'){
                $('body').removeClass('bg-cool');
                $('#social_media').show();
                //$('#img1').show();
            }
            //console.log(entry.target.id);
        }else{
            entry.target.classList.remove('active');
            entry.target.classList.remove('active-text');
            //console.log(entry.target);
            //entry.target.classList.add('hidden');
        }




    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
});

const hiddenText = document.querySelectorAll('.hidden-text');
hiddenText.forEach((element) => {
    observer.observe(element);
});
const bg = document.querySelectorAll('.nobg');
bg.forEach((element) => {
    observer.observe(element);
});