import { test } from "node:test";
import assert from "node:assert/strict";
import { serializeBody } from "./serialize.mjs";
test("arrays use bracket notation", () => assert.equal(decodeURIComponent(serializeBody({ events: ["a", "b"] })), "events[]=a&events[]=b"));
test("scalars unchanged", () => assert.equal(serializeBody({ name: "x" }), "name=x"));
