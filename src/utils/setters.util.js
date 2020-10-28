export const setTotalResources = (resources) => {
  return resources.length;
};

export const setAverageResourcesSize = (resources) => {
  return Math.floor(
    resources.reduce((acc, cur) => acc + cur.bytes, 0) / resources.length
  );
};

export const setBiggestResource = (resources) => {
  return resources
    .sort((firstEl, secondEl) => secondEl.bytes - firstEl.bytes)
    .splice(0, 1)[0].url;
};

export const setSmallestResource = (resources) => {
  return resources
    .sort((firstEl, secondEl) => firstEl.bytes - secondEl.bytes)
    .splice(0, 1)[0].url;
};

export const setFormatTypes = (resources, formats = {}) => {
  resources.forEach((curr) => {
    if (!formats[curr.format]) {
      formats[curr.format] = 1;
    } else {
      formats[curr.format] += 1;
    }
  });
  return formats;
};
