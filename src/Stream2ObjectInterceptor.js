/* jslint node: true, esnext: true */
'use strict';

import {
	Interceptor
}
from 'kronos-interceptor';

import {
	Obj2StringFactory
}
from './obj2string';

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
export default class Stream2ObjectInterceptor extends Interceptor {

	static get name() {
		return 'stream-obj-to-string';
	}

	receive(request, oldRequest) {
		if (request.payload) {
			const streamFilter = Obj2StringFactory(this.config.config, true);
			const stream = request.payload;
			request.payload = stream.pipe(streamFilter);
		}
		return this.connected.receive(request, oldRequest);
	}
}
