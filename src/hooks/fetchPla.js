import { useState, useEffect } from "react";

export const useFetchData = (
	BASE_URL = "",
	error_msg = "An error has ocurred getting the data"
) => {

	const [fetch_data, setFetchData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BASE_URL);

				if (!response.ok) {
					throw new Error(`Http status ${response.status}`);
				}

				const data = await response.json();

				console.log(data);
				setLoading(false);
				setFetchData(data.results);
			} catch (error) {
				setLoading(false);
				console.error(error.message);
				setError(error_msg);
			}
		};

		fetchData();
	}, [BASE_URL]); //Hacer enfasis en la url

	return {
		data: fetch_data,
		error,
		loading,
	};
};
