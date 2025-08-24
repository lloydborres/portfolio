import type { TagPillProps } from "@components";
import { TAG_LOOKUP, type TagLookupKey } from "@constants";

const tagNameToLabel = (name: string) => {
  const formatted = name.replace(/-/g, " ");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const tagNameToTagPillProps = (name: string): TagPillProps => {
  if (name in TAG_LOOKUP) {
    const tagLookup = TAG_LOOKUP[name as TagLookupKey];
    return tagLookup;
  } else {
    return {
      label: tagNameToLabel(name),
    };
  }
};

export { tagNameToLabel, tagNameToTagPillProps };
