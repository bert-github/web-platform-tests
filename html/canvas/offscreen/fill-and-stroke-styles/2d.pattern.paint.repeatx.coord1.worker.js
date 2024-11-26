// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.paint.repeatx.coord1
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);

  var response = await fetch('/images/red-16x16.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  var pattern = ctx.createPattern(img, 'repeat-x');
  ctx.fillStyle = pattern;
  ctx.translate(0, 16);
  ctx.fillRect(0, -16, 100, 50);

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 16);

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 98,1, 0,255,0,255);
  _assertPixel(canvas, 1,25, 0,255,0,255);
  _assertPixel(canvas, 98,25, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
}, "");
done();
