import React from "react";
import { fetchData } from "../utils/data-fetch";

const useFetch = () => {
	const [data, setData] = React.useState<Item[]>([]);
	React.useEffect(() => {
		window.setTimeout(()=> {
			fetchData().then((data) => setData(data));
		}, 500)
	}, []);

	return data;
};

export default useFetch;
