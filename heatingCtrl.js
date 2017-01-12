const heatingCtrl = ( () => {
    const gpio = require('rpi-gpio');
    const p = (msg) => { console.log(msg); }
    const setStatus = (status) => {
        gpio.setup(7, gpio.DIR_OUT, () => {
            gpio.write(7, status, err => {
                if (err) throw err;
            });
        });
    }

    const turnOn = () => {
        setStatus(true);
        p('Heating turned on');
    }
    const turnOff = () => {
        setStatus(false);
        p('heating turned off');
    }
    return {
        turnOn: turnOn,
        turnOff: turnOff
    }
}());

module.exports = heatingCtrl;
