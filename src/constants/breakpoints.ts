const PAGE_MAX_WIDTH = "1200px";

const MEDIA_QUERIES = {
  xs: "(max-width: 479px)", // Extra small - very small phones
  sm: "(min-width: 480px) and (max-width: 767px)", // Small - phones
  md: "(min-width: 768px) and (max-width: 1023px)", // Medium - tablets (portrait)
  lg: "(min-width: 1024px) and (max-width: 1279px)", // Large - tablets (landscape)
  xl: "(min-width: 1280px) and (max-width: 1439px)", // Extra large - small desktops
  xxl: "(min-width: 1440px)", // Double extra large - large desktops
};

const DEVICE_MEDIA_QUERIES = {
  phones: `${MEDIA_QUERIES.xs}, ${MEDIA_QUERIES.sm}`,
  tablets: `${MEDIA_QUERIES.md}, ${MEDIA_QUERIES.lg}`,
  desktops: `${MEDIA_QUERIES.xl}, ${MEDIA_QUERIES.xxl}`,
};

export { PAGE_MAX_WIDTH, MEDIA_QUERIES, DEVICE_MEDIA_QUERIES };
