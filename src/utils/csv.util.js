import { Parser } from 'json2csv';

export const jsonToCSV = (data) => {
  const json2csv = new Parser();
  const csv = json2csv.parse(data);

  return csv;
};
