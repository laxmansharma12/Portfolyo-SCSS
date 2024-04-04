// DataContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
			)
			.then((response) => setData(response.data.user))
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
