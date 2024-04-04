import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DataProvider } from "./Context/DataProvider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<DataProvider>
		<BrowserRouter>
			<App />
			<Toaster />
		</BrowserRouter>
	</DataProvider>
);
