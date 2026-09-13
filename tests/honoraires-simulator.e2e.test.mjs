import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.PRAXIS_TEST_BASE_URL ?? "http://127.0.0.1:3042";

test("the fees page renders the patient reimbursement simulator in every locale", async () => {
  for (const locale of ["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"]) {
    const response = await fetch(`${baseUrl}/${locale}/honoraires`);
    assert.equal(response.status, 200, `/${locale}/honoraires should render`);

    const html = await response.text();
    assert.match(html, /data-testid="reimbursement-simulator"/, `${locale} should render the simulator`);
    assert.match(html, /data-privacy="local-only"/, `${locale} should state that answers remain local`);
  }
});

test("the French fees page no longer swaps the common, F and E categories", async () => {
  const response = await fetch(`${baseUrl}/fr/honoraires`);
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Pathologie courante/);
  assert.match(html, /Fa ou Fb/);
  assert.match(html, /Pathologie lourde \(liste E\)/);
  assert.doesNotMatch(html, /Jusqu&#x27;à 18 séances\/an/);
  assert.doesNotMatch(html, /Séances illimitées/);
  assert.doesNotMatch(html, /ne peut pas vous facturer de supplément/);
  assert.doesNotMatch(html, /En résumé/);
});
