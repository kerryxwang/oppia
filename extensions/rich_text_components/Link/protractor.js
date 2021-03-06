// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities for using the Link component during
 * end-to-end testing with Protractor.js
 *
 * @author Jacob Davis (jacobdavis11@gmail.com)
 */

var objects = require('../../objects/protractor.js');

var customizeComponent = function(modal, url, openInSameWindow) {
  objects.SanitizedUrlEditor(
    modal.element(by.tagName('sanitized-url-editor'))
  ).setValue(url);
  objects.BooleanEditor(
    modal.element(by.tagName('schema-based-bool-editor'))
  ).setValue(openInSameWindow);
};

var expectComponentDetailsToMatch = function(elem, url, openInSameWindow) {
  expect(elem.element(by.tagName('a')).getAttribute('href')).toBe(url);
  expect(
    elem.element(by.tagName('a')).getAttribute('target')
  ).toBe(openInSameWindow ? '_top' : '_blank');
};

exports.customizeComponent = customizeComponent;
exports.expectComponentDetailsToMatch = expectComponentDetailsToMatch;
