var visitedHash = [];
$(document).ready(function(){
   $(document).foundation();
   setTimeout(function(){
       if (window.location.hash.length > 1) {
           visitedHash.push( window.location.hash );
       }
   }, 200);
   if (window.location.hash.length)
   $(window).bind('hashchange', function() {
       var $activeEl = $( window.location.hash );
       if ($activeEl.length > 0) {
           console.log(visitedHash, visitedHash.indexOf(window.location.hash));
           if (visitedHash.indexOf( window.location.hash ) > -1) {
                console.log('VISITED');
                $('body').addClass('back');
                visitedHash = visitedHash.slice(0, visitedHash.indexOf('#military-service'))
            } else {
                console.log('NOT VISITED');
                $('body').removeClass('back');
                visitedHash.push( window.location.hash );
           }
           $activeEl.addClass('active enter');
           $inactiveEl = $activeEl.siblings('.active');
           if ($inactiveEl.length > 0) {
               $inactiveEl.removeClass('now').addClass('leave').removeClass('enter');
               setTimeout(function(){
                   $inactiveEl.removeClass('active leave');
               }, 800);
           }
       }
   });
});