import React from "react";
import ReactDOM from 'react-dom';
import { ToDoHeader } from "./header.jsx";
import { List } from "./body-list.jsx";
import { Fragment } from "react/cjs/react.production.min";


//create your first component
const Home = () => {

	return(
		<div>
		<ToDoHeader />
		<List />
		</div>
	)
		
	
};




export default Home;
