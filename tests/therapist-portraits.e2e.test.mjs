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

test("the team page serves a native wide high-resolution group portrait", async () => {
  const pageResponse = await fetch(`${baseUrl}/fr/team`);
  assert.equal(pageResponse.status, 200, "/fr/team should render");

  const html = await pageResponse.text();
  assert.match(html, /team-avatar3\.png/, "the new detailed banner should render");
  assert.doesNotMatch(html, /team-avatar2\.jpg/, "the old portrait crop should be retired");

  const imageResponse = await fetch(`${baseUrl}/avatars/team-avatar3.png`);
  assert.equal(imageResponse.status, 200, "the new team portrait should be available");

  const png = Buffer.from(await imageResponse.arrayBuffer());
  assert.equal(png.toString("ascii", 1, 4), "PNG", "the banner should be a PNG");

  const width = png.readUInt32BE(16);
  const height = png.readUInt32BE(20);
  assert.ok(width >= 1800, `banner width should preserve facial detail, got ${width}px`);
  assert.ok(width / height >= 2.2, `banner should be natively wide, got ${width}×${height}`);
});
