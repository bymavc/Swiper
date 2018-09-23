function Swiper(callback, elementId, direction){

    let element = document.getElementById(elementId);

    element.addEventListener('mousedown', handleTouchStart, false);
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
    element.addEventListener('mousemove', handleTouchMove, false);

    let touchstartX = null;
    let touchendX = null;

    //Get event touch information
    function getTouches(e){
        return e.touches || e.originalEvent.touches;
    }

    //Store information about where the touch started
    function handleTouchStart(e){
        touchstartX = getTouches(e)[0].clientX;
    };

    //Take an action based on where the touch event moved to
    function handleTouchMove(e){
        if(!touchstartX){ return; };

        touchendX = getTouches(e)[0].clientX;
        switch(direction){
            case 'right':
                handleSwipeRight();
                break;
            case 'left':
                handleSwipeLeft();
                break;
        }
    }

    function handleSwipeRight(){
        if(touchstartX <= touchendX){
            callback();
        }
    }

    function handleSwipeLeft(){
        if(touchstartX >= touchendX){
            callback();
        }
    }

}