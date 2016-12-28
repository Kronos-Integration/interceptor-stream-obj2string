/* jslint node: true, esnext: true */
'use strict';

import Stream2ObjectInterceptor from './Stream2ObjectInterceptor';

function registerWithManager(manager) {
  return manager.registerInterceptor(Stream2ObjectInterceptor);
}

export {
  Stream2ObjectInterceptor,
  registerWithManager
};
