/**
 * @jest-environment jsdom
 */

window.fetch = require('node-fetch');
window.URLSearchParams = require('url').URLSearchParams;

require('./base');
