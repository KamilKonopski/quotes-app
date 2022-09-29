import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
	const { quoteId } = useParams();

	return (
		<Fragment>
			<h1>{quoteId}</h1>
			<Route path={`/quotes/${quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
