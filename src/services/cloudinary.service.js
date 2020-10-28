import { cloudinaryApi } from '../configs/cloudinary.config';

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

    return resources;
  } catch (err) {
    throw err;
  }
};

export const getCsv = async () => {
  try {
    return 'csv';
  } catch (err) {
    throw err;
  }
};
