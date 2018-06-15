/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
      (function($) {
            'use strict'; // use strict to start
        
            jQuery(document).ready(function($) {
                   
                //single progress bar
                
                 $('#cirlc-1').circleProgress({   
                    value: 0.98,
                    size: 150,
                    thickness:6,
                    fill: '#FFFAFA',
        
                  }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('.circle-inner').html(Math.round(98 * progress) + '<i>%</i>');
                  });
        
                //single progress bar
                
                 $('#cirlc-2').circleProgress({
                    value: 0.91,
                    size: 150,
                    thickness:6,
                    fill: '#FFFAFA',
        
                  }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('.circle-inner').html(Math.round(91 * progress) + '<i>%</i>');
                  });
        
                //single progress bar
                
                 $('#cirlc-3').circleProgress({
                    value: 0.8,
                    size: 150,
                    thickness:6,
                    fill: '#FFFAFA',
                    
                  }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('.circle-inner').html(Math.round(80 * progress) + '<i>%</i>');
                  });
        
                //single progress bar
        
                 $('#cirlc-4').circleProgress({
                    value: 1,
                    size: 150,
                    thickness:6,
                    fill: '#FFFAFA',
                  }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('.circle-inner').html(Math.round(100 * progress) + '<i>%</i>');
                  });
        
        
                
            });
        
              
        
            jQuery(window).load(function() {
		

            });
        
        
        
        
        }(jQuery));