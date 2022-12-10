import React from "react";
import FilterImportance from "./FilterImportance";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import classNames from "classnames";
import { conditional_Colors, select_item } from "../utils/utils";

function Title() {
	const data = useFetch();
	const [filter, setFilter] = React.useState("");
	
	if (data.length) {
		return (
			<div className="container">
				<FilterImportance value={filter as Filter} onChange={setFilter} />
				
				{data
					.filter((item) => {
						return select_item(filter as Filter, item);
					})
					.map((item) => {
						return (
							<div key={item.id} className="item">
								<Link
									to={`/details/${item.id}`}
									style={{ textDecoration: "none", cursor: "pointer" }}
								>
									<li
										className={classNames(
											conditional_Colors(item.level as Level),
											"font-bigger"
										)}
									>
										<h1>{item.title}</h1>
										<p className="truncate">{item.body}</p>
									</li>
								</Link>
							</div>
						);
					})}
			</div>
		);
	} else {
		return <Loading />;
	}
}

export default Title;
