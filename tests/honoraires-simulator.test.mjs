import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateFeeEstimate,
  getPathwaySummary,
} from "../src/lib/honoraires-simulator.ts";

test("a common-pathology patient with 9 completed sessions has 9 preferred-rate sessions left", () => {
  assert.deepEqual(getPathwaySummary("current", 9), {
    pathway: "current",
    completed: 9,
    nextSession: 10,
    band: "preferred",
    preferredLimit: 18,
    remainingPreferred: 9,
    period: "calendar-year",
    requiresApproval: false,
  });
});

test("an Fa patient with 30 completed sessions has 30 preferred-rate sessions left in the 365-day period", () => {
  assert.deepEqual(getPathwaySummary("fa", 30), {
    pathway: "fa",
    completed: 30,
    nextSession: 31,
    band: "preferred",
    preferredLimit: 60,
    remainingPreferred: 30,
    period: "rolling-365-days",
    requiresApproval: false,
  });
});

test("an Fb patient moves through the two reduced-reimbursement bands after session 60", () => {
  assert.equal(getPathwaySummary("fb", 59).band, "preferred");
  assert.equal(getPathwaySummary("fb", 60).band, "reduced-first");
  assert.equal(getPathwaySummary("fb", 80).band, "reduced-second");
  assert.equal(getPathwaySummary("fb", 60).remainingPreferred, 0);
});

test("a list-E pathway requires mutuality approval and has no 18-or-60-session counter", () => {
  assert.deepEqual(getPathwaySummary("e", 42), {
    pathway: "e",
    completed: 42,
    nextSession: 43,
    band: "preferred",
    preferredLimit: null,
    remainingPreferred: null,
    period: "approval-up-to-three-years",
    requiresApproval: true,
  });
});

test("an unknown prescription never produces a guessed reimbursement category", () => {
  assert.equal(getPathwaySummary("unknown", 12).band, "unknown");
  assert.equal(calculateFeeEstimate({
    pathway: "unknown",
    completed: 12,
    practitioner: "conventioned",
    location: "cabinet",
  }), null);
});

test("conventioned estimates use the correct current, F and E patient shares", () => {
  const current = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fa = calculateFeeEstimate({ pathway: "fa", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fb = calculateFeeEstimate({ pathway: "fb", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "conventioned", location: "cabinet" });
  const e = calculateFeeEstimate({ pathway: "e", completed: 0, practitioner: "conventioned", location: "cabinet" });

  assert.deepEqual(current?.patientShare, { standard: 6.25, bim: 2.5 });
  assert.deepEqual(fa?.patientShare, { standard: 5.5, bim: 2 });
  assert.deepEqual(fb?.patientShare, { standard: 5.5, bim: 2 });
  assert.equal(fbAfter60?.band, "reduced-first");
  assert.deepEqual(fbAfter60?.reimbursement, { standard: 20.87, bim: 24.37 });
  assert.deepEqual(fbAfter60?.patientShare, { standard: 5.5, bim: 2 });
  assert.deepEqual(e?.patientShare, { standard: 3.88, bim: 1.38 });
});

test("home-visit estimates use the dedicated INAMI amounts", () => {
  const conventionedE = calculateFeeEstimate({ pathway: "e", completed: 0, practitioner: "conventioned", location: "home" });
  const loicFbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "loic", location: "home" });

  assert.equal(conventionedE?.chargedFee, 34.81);
  assert.deepEqual(conventionedE?.patientShare, { standard: 3.88, bim: 1.38 });
  assert.equal(loicFbAfter60?.chargedFee, 38);
  assert.deepEqual(loicFbAfter60?.patientShare, { standard: 19.97, bim: 10.47 });
});

test("Loic estimate reflects the selected category and reduced-reimbursement band", () => {
  const current = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "loic", location: "cabinet" });
  const fbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "loic", location: "cabinet" });
  const fbAfter80 = calculateFeeEstimate({ pathway: "fb", completed: 80, practitioner: "loic", location: "cabinet" });

  assert.deepEqual(current?.patientShare, { standard: 15.95, bim: 5.86 });
  assert.deepEqual(fbAfter60?.patientShare, { standard: 19.34, bim: 10.63 });
  assert.deepEqual(fbAfter80?.patientShare, { standard: 30.56, bim: 25.58 });
});

test("completed-session input is normalized to a non-negative whole number", () => {
  assert.equal(getPathwaySummary("current", -3).completed, 0);
  assert.equal(getPathwaySummary("fa", 9.8).completed, 9);
});
