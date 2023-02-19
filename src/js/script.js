
$(window).scroll(function(){
    if($(this).scrollTop() >1600){
     $('.pageup').fadeIn();
    }else{
    $('.pageup').fadeOut();
}
});

const slider = tns({
    container: '.carousel_inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav:false
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
  
    }); 

      
function toggleSlide(item) {
   $(item).each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').toggleClass('catalog-item__content_active');
        ;
        $('.catalog-item_list').toggleClass('catalog-item_list_active');
       })
     });
    };
toggleSlide('catalog-item_list');

toggleSlide('catalog-item_back');

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)',function() { $(this)
    
    .addClass ('catalog__tab_active') .siblings ().removeClass ('catalog__tab_active')
    .closest ('div.container').find('div. catalog__content'). removeClass ('catalog__content_active').eq($(this). index ()) .addClass 
    ('catalog__content_active');
});

 $('[ data-modal=consultation]').on('click',function(){
 $('.overlay,#consultation').fadeIn('slow');
});
$('.modal_close').on('click',function(){
  $('.overlay,#consultation,#thanks,#order').fadeOut('slow');
});
$('.button_mini').on('click',function(){
    $('.overlay, #order').fadeIn('slow');
});
$('.button_mini').each(function(i){
$(this).on('click', function(){
$('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text())
$('.overlay, #order').fadeIn('slow');
})
//form validate
});
$('#consultation-forms').validate();

$('#consultation forms').validate({
 rules:{
        name:"required",
        phone:"required", 
        email: {
    required:true,
    email:true

        }                 
    },
    messages: {
        name: "Please specify your name",
        phone:"enter phone number",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
    }
});     
valideForms ('#consultation-forms'); 
valideForms ('#consultation forms');
valideForms('#order forms');
//maskedinpu

$('input [name=phone]').mask("+7 (999)99-99-99");
//phpmailer
$('forms').submit(function(e){
    e.preventDefault() ;
    $.ajax({
          type: "POST",
           url: "mailer/smart.php",
           data: $(this).serialize()
        }) . done(function () {
            $(this).find('input').val("");
          $('#consultation, #thanks').fadeIn('slow');
          $('.overlay,#thanks').fadeOut('slow');

            $(' form').trigger (' reset ')
        });
       // Smooth scroll and pageup
        $(window).scroll(function(){
            if($(this).scrollTop() >1600){
             $('.pageup').fadeIn();
            }else{
            $('.pageup').fadeOut();
            
            }      
        });  
        $("a [href^='#']"). click(function (){
        const
        _href = $(this).attr("href");
        $("html, body") .animate({scrollTop: $(_href).offset() .top+"px"});
        return false;
    });
   
    });
