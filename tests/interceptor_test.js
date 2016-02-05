/* global describe, it, xit */
/* jslint node: true, esnext: true */

"use strict";

/*
 * Just test if the message will be passed through the interceptor
 */

const chai = require('chai'),
  stream = require('stream'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  InterceptorUnderTest = require('../index').Interceptor,
  MockReceiveInterceptor = require('kronos-test-interceptor').MockReceiveInterceptor,
  mockReadStreamFactory = require('kronos-test-interceptor').mockReadStreamFactory;


class MockWriteStream extends stream.Writable {
  constructor() {
    super({
      objectMode: true,
      highWaterMark: 16
    });

    // Stores the data written
    this.objectStack = [];
  }

  _write(chunk, encoding, callback) {
    this.objectStack.push(chunk);
    console.log(chunk);
    callback();
  }
}


const stepMock = {
  "name": "dummy step name",
  "type": "dummy step type"
};

const checkProperties = {};


describe('Interceptor test', function () {

  it('Create', function () {
    const endpoint = {
      "owner": stepMock,
      "name": "gumboIn"
    };
    const messageHandler = new InterceptorUnderTest(checkProperties, endpoint);
    assert.ok(messageHandler);
  });

  it('Send message', function (done) {
    const endpoint = {
      "owner": stepMock,
      "name": "gumboIn"
    };

    // create a dummy payload and add two objects
    const dummyStream = mockReadStreamFactory();
    dummyStream.add({
      "name": "Matt",
      "line_number": 3
    });
    dummyStream.add({
      "last_name": "Herbert"
    });

    const sendMessage = {
      "info": "first message",
      "payload": dummyStream
    };

    const writer = new MockWriteStream();

    writer.on('finish', function (val) {
      assert.equal(writer.objectStack.length, 2);
      assert.equal(writer.objectStack[0], '{"name":"Matt","line_number":3}\n');
      assert.equal(writer.objectStack[1], '{"last_name":"Herbert"}\n');
      done();
    });

    const messageHandler = new InterceptorUnderTest(checkProperties, endpoint);
    const mockReceive = new MockReceiveInterceptor(function (request, oldRequest) {
      assert.ok(request);

      request.payload.pipe(writer);
    });

    messageHandler.connected = mockReceive;
    messageHandler.receive(sendMessage);

  });



});
