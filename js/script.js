$(function() {

      $('.calc__price__btn').each(function() {
                $(this).on('click', function() {
                      $('html, body').stop().animate({scrollTop: $('.offer__title').offset().top}, 800);
                });
      }) ; 

    $('.select').on('click', function() {
         $('.select__items').slideToggle(200);
         $('.select__arrow').toggleClass('active');
     });

    $('.select__items__item').each(function() {
            let txt = $(this).text();
            $(this).on('click', function() {
                 $('.select__area').val(txt);

            });
    });

    // $('.buttons__btn').on('click', function() {
    //         var atr = $(this).attr('atr');
    //        $(this).addClass('button__active').siblings().removeClass('button__active');
    //         $('.' + atr).show().siblings('.page').hide();
    // });

    var flag = true;
    $('.question-answer__item__btn').on('click', function() {
        if(!flag) return false
            var index = $(this).index('.question-answer__item__btn');
            $('.question-answer__item__btn__icon').eq(index).toggleClass('question-answer__item__btn__icon_active');
            $('.question-answer__item__text').eq(index).slideToggle(500, function() {
                flag = true
            });
        flag = false
    });

    
    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map('map', {
                center: [55.892943446135625,38.07426970772281],
                zoom: 12,
                controls: ['zoomControl'],
                behaviors: ['drag'] 
        });
        var placemark = new ymaps.Placemark([55.893045711956795,38.06852064921716], {
                hintContent: '<div class="hint">беляева 54</div>',
                balloonContent: [
                '<div class="tooltip">',
                '<img class="tooltip__logo" src="img/logo_1.png">',
                '<h6 class="tooltip__title">Наши контакты',
                '</h6>',
                '<div class="navigation__items tooltip__items">',
                '<div class="navigation__phone tooltip__phone">',
                '<a href="tel:+74951950021">',
                '<img class="navigation__phone_img" src="img/telephone-icon-73544.png" alt="телефон">',
                '<span class="navigation__phone_phone">+7 (495) 195-00-21</span>',
                '</a>',
                '</div>',
                '<div class="navigation__email tooltip__email">',
                '<a href="mailto:info@perila-montag.ru">',
                '<img src="img/Слой-23.png" alt="email">',
                '<span>info@perila-montag.ru</span>',
                '</a>',
                '</div>',
                '</div>',
                '</div>'
                ].join('')
        },
        {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon.png',
                iconImageSize: [50, 50],
                iconImageOffset: [-30, -40]
        })
        map.geoObjects.add(placemark);
        // placemark.balloon.open();
    }
});