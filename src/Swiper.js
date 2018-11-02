function Swiper(callback, elementId, direction) {

    /**
     * Gets the specified DOM element to use the Swiper on
     */
    let element = document.getElementById(elementId);

    /**
     * If direction is not set, it will be 'right' by default
     */
    let dir = (direction == null) ? 'right' : direction;

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
    function getTouches(e) { return e.changedTouches ? e.changedTouches[0] : e };

    /**
     * Stores coordinates where touch started
     * @param {Object} e - Event
     */
    function handleTouchStart(e) { touchstartX = getTouches(e).clientX };

    /**
     * Triggers an action based on the direction of the swipe
     * @param {Object} e - Event
     */
    function handleTouchEnd(e) {
        if (!touchstartX) {
            return;
        };

        touchendX = getTouches(e).clientX;
        let difference = touchendX - touchstartX;

        switch (dir) {
            case 'right':
                handleSwipeRight(difference);
                break;
            case 'left':
                handleSwipeLeft(difference);
                break;
        }

        touchstartX = null;
        touchendX = null;
    }

    /**
     * Prevents default on touchmove
     * @param {Object} e - Event
     */
    function handleTouchMove(e) { e.preventDefault() };

    /**
     * Executes callback if swiped right
     */
    function handleSwipeRight(swipe) {
        if (swipe > 0) {
            callback();
        }
    }

    /**
     * Executes callback if swiped left
     */
    function handleSwipeLeft() {
        if (swipe < 0) {
            callback();
        }
    }

    element.addEventListener('mousedown', handleTouchStart, false);
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener("touchend", handleTouchEnd, false);
    element.addEventListener("mouseup", handleTouchEnd, false)
    element.addEventListener('touchmove', handleTouchMove, false);
    element.addEventListener('mousemove', handleTouchMove, false);
}