function startup(){
    const el = document.getElementById('canvas');
    el.addEventListener('touchstart', handleStart);
    el.addEventListener('touchmove', handleMove);
    el.addEventListener('touchend', handleEnd);
    el.addEventListener('touchcancel', handleCancel);
    log('Initialized');
    
    document.addEventListener('DOMContentLoaded',startup);

    const ongoingTouches = [];

    function handleStart(evt) {
        evt.preventDefault();
        log('touchStart');
        const el = document.getElementById('canvas');
        const ctx = el.getContext('2d');
        const touches = evt.changedTouches;

        for (let i =0; i < touches.length; i++) {
            log(`touchstart: ${i}.`);

            ongoingTouches.push(copyTocuh(touches[i]));
        const color = colorForTouch(touches[i]);
        log(`color fo touch with id ${touches[i].identifier} = ${color}`);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);

        // a circle at the start
        ctx.fillStyle = color;
        ctx.fill();
        }
    }
}