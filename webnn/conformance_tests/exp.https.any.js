// META: title=test WebNN API element-wise exp operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-unary
// Compute the exponential of the input tensor, element-wise.
//
// MLOperand exp(MLOperand input);


const getExpPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 32, float16: 1};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const expTests = [
  {
    'name': 'exp float32 0D scalar',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [0.3421436548233032],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [1.4079625606536865],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 1D constant tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 1D tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 2D tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 3D tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 4D tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'exp float32 5D tensor',
    'graph': {
      'inputs': {
        'expInput': {
          'data': [
            0.3421436548233032,  -3.310965061187744,  -3.6967575550079346,
            -5.105378150939941,  5.47104024887085,    -0.06790750473737717,
            2.7373435497283936,  -3.5470757484436035, 5.339224815368652,
            -1.2636781930923462, -0.9162953495979309, -9.088432312011719,
            -4.016050815582275,  4.670352935791016,   7.326992034912109,
            8.294342994689941,   -7.345414161682129,  -0.9275799989700317,
            -1.7085379362106323, -9.73737907409668,   -1.9747875928878784,
            8.203149795532227,   -7.267597675323486,  -3.5890684127807617
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'exp',
        'arguments': [{'input': 'expInput'}],
        'outputs': 'expOutput'
      }],
      'expectedOutputs': {
        'expOutput': {
          'data': [
            1.4079625606536865,   0.03648095205426216,   0.024803820997476578,
            0.006064045242965221, 237.70733642578125,    0.9343469142913818,
            15.44589900970459,    0.02880876138806343,   208.35113525390625,
            0.2826126217842102,   0.39999815821647644,   0.00011296502634650096,
            0.018024004995822906, 106.73540496826172,    1520.8004150390625,
            4001.173583984375,    0.0006455459515564144, 0.3955096900463104,
            0.18113042414188385,  0.0000590350573475007, 0.1387907862663269,
            3652.4365234375,      0.0006977862794883549, 0.02762405201792717
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  expTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getExpPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
