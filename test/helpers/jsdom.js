/* Copyright © 2016 Kuali, Inc. - All Rights Reserved
 * You may use and modify this code under the terms of the Kuali, Inc.
 * Pre-Release License Agreement. You may not distribute it.
 *
 * You should have received a copy of the Kuali, Inc. Pre-Release License
 * Agreement with this file. If not, please write to license@kuali.co.
 */


import { jsdom } from 'jsdom'

const exposedProperties = [ 'window', 'navigator', 'document' ]
global.document = jsdom('')
global.window = global.document.defaultView
Object.keys(global.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = global.document.defaultView[property]
  }
})
global.navigator = {
  userAgent: 'node.js'
}
global.documentRef = global.document
