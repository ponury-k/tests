"use strict";
const assert = require("assert");
const MongoClient = require('mongodb').MongoClient;
const semver = require('semver');
describe("mongodb", function () {
	it("version", function (done) {
		MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
			assert.ok(err === null);
			// Use the admin database for the operation
			const adminDb = db.admin();
			// Retrive the build information using the admin command
			adminDb.command({buildInfo : 1}, function (err, info) {
				assert.ok(err === null);
				assert.ok(semver.satisfies(info.version, '>=3.4'));
				done();
			});
		});
	});
});
