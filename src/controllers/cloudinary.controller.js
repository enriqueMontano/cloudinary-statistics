import { getStatistics, getCsv } from '../services';

export const GetStatistics = async (req, res, next) => {
  try {
    const statistics = await getStatistics();
    res.status(200).json(statistics);
  } catch (error) {
    next(error);
  }
};

export const GetCsv = async (req, res, next) => {
  try {
    const csv = await getCsv();
    res
      .status(200)
      .header('Content-Type', 'text/csv')
      .attachment('resources.csv')
      .send(csv);
  } catch (error) {
    next(error);
  }
};
