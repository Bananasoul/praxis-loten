export type TherapistPortraitContext = "card" | "thumbnail" | "profile";

type TherapistPortrait = {
  src: string;
  className: string;
};

const DEFAULT_CLASSES: Record<TherapistPortraitContext, string> = {
  card: "object-cover object-[center_15%]",
  thumbnail: "object-cover object-[center_15%]",
  profile: "object-cover object-[center_15%]",
};

const PHILIPPE_CLASSES: Record<TherapistPortraitContext, string> = {
  card: "object-cover object-[center_30%]",
  thumbnail: "object-cover object-bottom",
  profile: "object-cover object-bottom",
};

export function getTherapistPortrait(
  slug: string,
  context: TherapistPortraitContext,
): TherapistPortrait {
  if (slug === "philippe-banaszak") {
    return {
      src: "/avatars/philippe-banaszak-uniform.png",
      className: PHILIPPE_CLASSES[context],
    };
  }

  return {
    src: `/avatars/${slug}.jpg`,
    className: DEFAULT_CLASSES[context],
  };
}
