"use strict";
var assert = require("assert");
var Utils = {
	getType : function(val) {
		return typeof val;
	}
};
describe("Utils", function () {
	describe("getType", function () {
		it("should be boolean", function () {
			assert.equal(Utils.getType(true), "Boolean");
		});
		it("should be boolean", function () {
			assert.equal(Utils.getType(false), "Boolean");
		});
		it("should be integer", function () {
			assert.equal(Utils.getType(0), "Integer");
		});
		it("should be integer", function () {
			assert.equal(Utils.getType(1), "Integer");
		});
		it("should be float", function () {
			assert.equal(Utils.getType(1.23), "Float");
		});
		it("should be integer", function () {
			assert.equal(Utils.getType(-1), "Integer");
		});
		it("should be float", function () {
			assert.equal(Utils.getType(-1.23), "Float");
		});
		it("should be string", function () {
			assert.equal(Utils.getType('0'), "String");
		});
		it("should be string", function () {
			assert.equal(Utils.getType('dumb'), "String");
		});
		it("should be array", function () {
			assert.equal(Utils.getType([]), "Array");
		});
		it("should be object", function () {
			assert.equal(Utils.getType({}), "Object");
		});
		it("should be Function", function () {
			assert.equal(Utils.getType(function(){}), "Function");
		});
		it("should be someFunction", function () {
			assert.equal(Utils.getType(function someFunction(){}), "someFunction");
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
			assert.equal(Utils.getType(null), "Null");
		});
		it("should be Undefined", function () {
			assert.equal(Utils.getType(undefined), "Undefined");
		});
		it("should be Float", function () {
			assert.equal(Utils.getType(Infinity), "Float");
		});
	});
});