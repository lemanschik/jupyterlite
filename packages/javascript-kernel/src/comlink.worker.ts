// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

/**
 * A WebWorker entrypoint that uses comlink to handle postMessage details
 */
import { expose } from 'comlink';

import { getRemoteKernel } from './worker.js';

self.onconnect = ({ports:[port]}) => expose(new getRemoteKernel(port.postMessage.bind(port))(), port);
expose(worker);
