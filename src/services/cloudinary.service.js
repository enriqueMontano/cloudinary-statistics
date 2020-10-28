import { cloudinaryApi } from '../configs/cloudinary.config';
import {
  setTotalResources,
  setFormatTypes,
  setBiggestResource,
  setSmallestResource,
  setAverageResourcesSize,
  jsonToCSV,
} from '../utils';
import { MissingDataError } from '../errors';

async function getResources(options) {
  const response = await cloudinaryApi(options, function (error, result) {
    if (error) {
      return error;
    } else {
      return result;
    }
  });

  while (response.next_cursor) {
    const { resources, next_cursor } = await cloudinaryApi({
      max_results: options.max_results,
      next_cursor: next_cursor,
    });

    response.resources = [...response.resources, ...resources];
    response.next_cursor = next_cursor;
  }

  return response.resources;
}

export const getStatistics = async () => {
  try {
    const options = { max_results: 100, next_cursor: null };
    const resources = await getResources(options);
    if (!resources) throw new MissingDataError();

    const statistics = {
      totalImages: setTotalResources(resources),
      formats: setFormatTypes(resources),
      biggestPicture: setBiggestResource(resources),
      smallestPicture: setSmallestResource(resources),
      avgSize: setAverageResourcesSize(resources),
    };

    return statistics;
  } catch (err) {
    throw err;
  }
};

export const getCsv = async () => {
  try {
    const options = { max_results: 100, next_cursor: null };
    const resources = await getResources(options);
    if (!resources) throw new MissingDataError();

    const csv = jsonToCSV(resources);
    return csv;
  } catch (err) {
    throw err;
  }
};
