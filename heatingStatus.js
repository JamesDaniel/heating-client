const heatingStatus = ( () => {
    const Client = require('node-rest-client').Client;
    const client = new Client();

    const isOn = () => {
        client.get("https://httpbin.org/get", function (data, response) {
            console.log(data);
            response.status = 1; //this line for testing onle. delete later.
            if (response.status === 1) {
                console.log('heating is on');
            } else if (response.status === 0) {
                console.log('heating is not on');
            }
        });
    }
    const setStatus = () => {
        var args = {
            path: { "id": 120 },
            parameters: { arg1: "hello", arg2: "world" },
            headers: { "test-header": "client-api" },
            data: "<xml><arg1>hello</arg1><arg2>world</arg2></xml>"
        };

        console.log('this function is not complete');
 
        //client.post("www.todo.com", args, function (data, response) {
    
        //});
    }
    return {
        isOn: isOn,
        setStatus: setStatus
    }
}());

module.exports = heatingStatus;
