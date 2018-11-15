window.requestNextAnimationFrame =
    (() => {
        return function (callback, element) {
            var start;
            window.setTimeout(() => {
                start = +new Date();
                callback(start);
            });
        };
    })();
