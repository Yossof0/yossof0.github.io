import { describe, expect, it } from "vitest";
import { sectionFromLegacyHash, sectionFromPath } from "@/portfolio/sections";

describe("portfolio section links", () => {
  it("maps old #/about links to the About page", () => {
    expect(sectionFromLegacyHash("#/about")).toBe("about");
  });
  it("ignores hashes that are not section links", () => {
    expect(sectionFromLegacyHash("#/nope")).toBeNull();
    expect(sectionFromLegacyHash("#contact")).toBeNull();
  });
  it("highlights the right menu item for each page", () => {
    expect(sectionFromPath("/gallery")).toBe("gallery");
    expect(sectionFromPath("/")).toBe("home");
  });
});
