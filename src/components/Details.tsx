import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { text_uppercase } from "../utils/utils";

const Details = () => {
	const { itemId } = useParams();
	const data = useFetch();
	let displayData;
	if (data.length) {
		displayData = data.find((item) => item.id === itemId);
	}
	return (
		<>
			{displayData ? (
				<div className="details">
					<h1>Title: {displayData.title}</h1>
					<p className="description">
						<span className="span">Description: </span>
						{displayData?.body}
					</p>
					<div className="url_action">
						<h2>{text_uppercase("url_action:")}</h2>
						<hr />
						<div>
							{displayData?.["url_action"] &&
								displayData?.["url_action"].map((item) => (
									<div key={item.title}>
										<h3>{item.title}</h3>
										<a
											target="_blank"
											href={item.url}
											rel="noreferrer"
											className="link_button"
										>
											{item.url}
										</a>
									</div>
								))}
						</div>
					</div>
					
					<div className="url_explanation">
						<h2>{text_uppercase("url_explanation:")}</h2>
						<hr className="hr_explanation" />
						<div>
							{displayData?.["url_explanation"] &&
								displayData?.["url_explanation"].map((item) => (
									<div key={item.title}>
										<h3>{item.title}</h3>
										<a
											target="_blank"
											href={item.url}
											rel="noreferrer"
											className="link_button"
										>
											{item.url}
										</a>
									</div>
								))}
						</div>
					</div>
					
					<button>
						<Link to={`/`}>Back Home</Link>
					</button>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Details;
