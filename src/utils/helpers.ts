import type { TagPillProps, SkillCardProps } from "@components";
import { TAG_LOOKUP, type TagLookupKey } from "@constants";

const nameToLabel = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const tagNameToTagPillProps = (name: string): TagPillProps => {
  if (name in TAG_LOOKUP) {
    const tagLookup = TAG_LOOKUP[name as TagLookupKey];
    return tagLookup;
  } else {
    return {
      label: nameToLabel(name),
    };
  }
};

const skillNameToSkillCardProps = (name: string): SkillCardProps => {
  if (name in TAG_LOOKUP) {
    const tagLookup = TAG_LOOKUP[name as TagLookupKey];
    return tagLookup;
  } else {
    return {
      label: nameToLabel(name),
    };
  }
};

const buttonAction =
  ({ url, isExternal }: { url?: string; isExternal?: boolean }) =>
  () => {
    if (isExternal) window.open(url, "_blank", "noopener,noreferrer");
    else window.open(url, "_self");
  };

export {
  nameToLabel,
  tagNameToTagPillProps,
  skillNameToSkillCardProps,
  buttonAction,
};
