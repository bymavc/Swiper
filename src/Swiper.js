function Swiper(callback, elementId, direction) {

    /**
     * Gets the specified DOM element to use the Swiper on
     */
    let element = document.getElementById(elementId);

    /**
     * If direction is not set, it will be 'right' by default
     */
    let dir = (direction == null) ? 'right' : direction;

    element.addEventListener('mousedown', handleTouchStart, false);
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
    element.addEventListener('mousemove', handleTouchMove, false);

    /**
     * touchstartX will keep the horizontal
     * coordinates where the touch started
     */
    let touchstartX = null;

    /**
     * touchendX will track the horizontal
     * coordinates where pointer moved to 
     * after touch started
     */
    let touchendX = null;

    /**
     * Gets touch coordinates
     * @param {Object} e - Event Passed
     */
    function getTouches(e) {
        return e.touches || e.originalEvent.touches;
    }

    /**
     * Stores coordinates where touch started
     * @param {Object} e - Event Started
     */
    function handleTouchStart(e) {
        touchstartX = getTouches(e)[0].clientX;
    };

    /**
     * Triggers an action based on the direction of the pointer
     * @param {Object} e - Event Started
     */
    function handleTouchMove(e) {
        if (!touchstartX) {
            return;
        };

        touchendX = getTouches(e)[0].clientX;
        switch (dir) {
            case 'right':
                handleSwipeRight();
                break;
            case 'left':
                handleSwipeLeft();
                break;
        }
    }

    /**
     * Executes callback if swiped right
     */
    function handleSwipeRight() {
        if (touchstartX <= touchendX) {
            callback();
        }
    }

    /**
     * Executes callback if swiped left
     */
    function handleSwipeLeft() {
        if (touchstartX >= touchendX) {
            callback();
        }
    }

}