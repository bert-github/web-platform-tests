// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.relativecolor
// Description:Relative color works as CanvasGradient color input
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Relative color works as CanvasGradient color input");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var g = ctx.createLinearGradient(0, 0, 100, 0);
  g.addColorStop(0, '#f00');
  g.addColorStop(1, 'rgb(from red g r b)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 100, 50);
  _assertPixelApprox(canvas, 25,25, 236,116,0,255, 3);
  _assertPixelApprox(canvas, 50,25, 208,170,0,255, 3);
  _assertPixelApprox(canvas, 75,25, 159,214,0,255, 3);
  t.done();
});
done();
