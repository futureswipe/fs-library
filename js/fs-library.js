"use strict";

"use strict";

class FS extends Array {
    fsReady(cb) {
        const isReady = this.some(e => {
            return e.readyState !== null && e.readyState !== 'loading';
        })
        if (isReady) {
            cb()
        } else {
            this.on('DOMContentLoaded');
            document.addEventListener('DOMContentLoaded', cb);
        }
        return this;
    }
}

function $(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new FS(...document.querySelectorAll(param))
    } else {
        return new FS(param)
    }
}

$.pagination = function ({get, number, size, array}) {
    if (get === 'pagination') {
        return array.slice((number - 1) * size, number * size);
    } else if (get === 'page') {
        return Math.ceil(array.length / size)
    } else if (get === 'page' && number) {
        console.error('error')
    } else {
        console.error('error')
    }
}