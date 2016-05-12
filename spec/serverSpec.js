var request = require('request');

var hackingCorp =require("../app.js");
var base_url = "http://localhost:8081/";


describe("Test to http request", function() {

    describe("GET /", function() {
        it("returns status code 200", function () {
            request.get(base_url, function (error, response, body) {

                expect(response.statusCode).toBe(200);
                done();
            });

        });
        var getCode = function (code, url) {
            if (code = (new RegExp('[?&]' + encodeURIComponent(code) + '=([^&]*)')).exec(url))
                return decodeURIComponent(code[1]);
        };


        it("check the code value of url", function () {
            //console.log("Test3");
            var url = "https://test.com?&code=testParam";
            var code = getCode("code", url);
            expect(code).toEqual("testParam");
        });



    });


});