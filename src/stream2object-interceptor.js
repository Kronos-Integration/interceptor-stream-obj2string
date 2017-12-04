import { Interceptor } from 'kronos-interceptor';
import { Obj2String } from './obj2string';

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
export class Stream2ObjectInterceptor extends Interceptor {
  static get name() {
    return 'stream-obj-to-string';
  }

  receive(request, oldRequest) {
    if (request.payload) {
      const streamFilter = new Obj2String(this.config.config);
      const stream = request.payload;
      request.payload = stream.pipe(streamFilter);
    }
    return this.connected.receive(request, oldRequest);
  }
}

export function registerWithManager(manager) {
  return manager.registerInterceptor(Stream2ObjectInterceptor);
}
