import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.PRAXIS_TEST_BASE_URL ?? "http://127.0.0.1:3041";

const portraitRoutes = [
  "/fr",
  "/fr/team",
  "/fr/team/philippe-banaszak",
  "/fr/contact",
  "/fr/termin",
  "/fr/blog/therapie-manuelle-mythes-mouvement",
];

test("every therapist context renders Philippe's normalized portrait", async () => {
  for (const route of portraitRoutes) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200, `${route} should render`);

    const html = await response.text();
    assert.match(
      html,
      /philippe-banaszak-uniform\.png/,
      `${route} should use the normalized portrait`,
    );
    assert.doesNotMatch(
      html,
      /philippe-banaszak\.jpg/,
      `${route} should not use the oversized legacy portrait`,
    );
  }
});
