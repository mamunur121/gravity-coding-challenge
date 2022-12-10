import data from "../data";

export const fetchData = ():Promise<Item[]> => {
	return Promise.resolve(data);
};
