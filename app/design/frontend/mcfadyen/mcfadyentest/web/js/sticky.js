require([
    'jquery',
    "jquery/ui"
], function($){
    'use strict';    

    $(document).ready(function(){
        const intersectionObserver = new IntersectionObserver(function(scroll) {
            if(scroll[0].isIntersecting === true){
                $('.sidebar-additional').css('position', 'relative');
                $('.product-info-main').css('position', 'relative');
            }else{
                $('.sidebar-additional').css('position', 'sticky');
                $('.product-info-main').css('position', 'sticky');
            }
        }, { threshold: [0] });
        //watches scroll behaviour to stick/unstick content when necessary
        intersectionObserver.observe(document.querySelector(".product.attribute.overview"));
    })
});