
import "./jquery-import";

$(function() {
    const setRangeValue = (value = 1) =>{
        $("input[type='range']").val(value).attr('value', value)
    }
    const applyAnimate =(element, animation, duration, callback) =>{
        element.addClass(animation);
        setTimeout(function(){
            element.removeClass(animation);
            if(callback)
                callback();
        }, duration);
    }
    $( ".calendar-button" ).click(function() {
        applyAnimate($(this), 'jello-horizontal', 1200)
    });
    $( ".try-again" ).click(function() {
        applyAnimate($(this), 'heartbeat', 800, setRangeValue)
    });
    $( "input[type='range']").change(function() {
        applyAnimate($(this), 'blink-2', 500, setRangeValue(this.value))
    });
});
