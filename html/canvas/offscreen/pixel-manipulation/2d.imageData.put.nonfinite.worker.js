// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.put.nonfinite
// Description:putImageData() throws TypeError if arguments are not finite
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("putImageData() throws TypeError if arguments are not finite");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var imgdata = ctx.getImageData(0, 0, 10, 10);
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, -Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, NaN, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, -Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, NaN); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, -Infinity, 10, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, NaN, 10, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, -Infinity, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, NaN, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, -Infinity, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, NaN, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, -Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, NaN, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, -Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, NaN, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, 10, -Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, 10, NaN); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, 10); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, Infinity); });
assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, Infinity); });
t.done();

});
done();
