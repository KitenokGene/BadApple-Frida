function someFunction(frame) {
	// you should implement this function yourself. it might be changing some text in game
	// example: base.add(0x0).writeUtf8String(frame)
}

function badapple() {
    const FRAMES = [`INSERT YOUR FRAMES HERE`]

    let crntframe = 0;
    for (var i = 0; i < FRAMES.length; i += 1) {
        setTimeout(function(frame) {
            crntframe++;
            someFunction(`Bad Apple in Frida! | Frame ${crntframe} | github.com/kek/BadApple-Frida\n\n` + frame);
            console.log(`frame ${crntframe}`)
        }, 100 * i, FRAMES[i]);
    }
}

// call badapple() function somewhere in your script or via listen