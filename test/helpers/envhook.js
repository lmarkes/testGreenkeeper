/* Copyright © 2016 Kuali, Inc. - All Rights Reserved
 * You may use and modify this code under the terms of the Kuali, Inc.
 * Pre-Release License Agreement. You may not distribute it.
 *
 * You should have received a copy of the Kuali, Inc. Pre-Release License
 * Agreement with this file. If not, please write to license@kuali.co.
 */

/*
 * envhook.js
 * This file is required in mocha.opts. The only purpose of this file is to
 * ensure that the NODE_ENV is set to test without manually doing so.
 */

process.env.NODE_ENV = 'test'
