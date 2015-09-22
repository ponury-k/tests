"use strict";
var assert = require("assert");
var Utils = {
	getType: function (val) {
		return typeof val;
	}
};

describe("getType", function () {
	it("should be boolean", function () {
		assert.equal(Utils.getType(true), "boolean");
	});
	it("should be boolean", function () {
		assert.equal(Utils.getType(false), "boolean");
	});
	it("should be integer", function () {
		assert.equal(Utils.getType(0), "number");
	});
	it("should be integer", function () {
		assert.equal(Utils.getType(1), "number");
	});
	it("should be float", function () {
		assert.equal(Utils.getType(1.23), "number");
	});
	it("should be integer", function () {
		assert.equal(Utils.getType(-1), "number");
	});
	it("should be float", function () {
		assert.equal(Utils.getType(-1.23), "number");
	});
	it("should be string", function () {
		assert.equal(Utils.getType('0'), "string");
	});
	it("should be string", function () {
		assert.equal(Utils.getType('dumb'), "string");
	});
	it("should be array", function () {
		assert.equal(Utils.getType([]), "array");
	});
	it("should be object", function () {
		assert.equal(Utils.getType({}), "object");
	});
	it("should be Function", function () {
		assert.equal(Utils.getType(function () { }), "function");
	});
	it("should be someFunction", function () {
		assert.equal(Utils.getType(function someFunction() { }), "someFunction");
	});
	it("should be Date", function () {
		assert.equal(Utils.getType(new Date()), "Date");
	});
	it("should be RegExp", function () {
		assert.equal(Utils.getType(/regexp/), "RegExp");
	});
	it("should be Utils", function () {
		assert.equal(Utils.getType(Utils), "Utils");
	});
	it("should be someFunction", function () {
		function someFunction() {
			return true;
		}
		assert.equal(Utils.getType(someFunction), "someFunction");
	});
	it("should be Null", function () {
		assert.equal(Utils.getType(null), "null");
	});
	it("should be Undefined", function () {
		assert.equal(Utils.getType(undefined), "undefined");
	});
	it("should be Float", function () {
		assert.equal(Utils.getType(Infinity), "float");
	});
});
