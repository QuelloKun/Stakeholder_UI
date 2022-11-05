$( window ).on('scroll', function(){

    var scrollTop = $(this).scrollTop();
    $( '.text-reveal' ).css({
      transform: 'translateX('+  ( 2 * scrollTop ) +'px)',
    });

  });