import { useParams } from "react-router-dom";

const QuoteDetail = () => {
	const { quoteId } = useParams();

	return <h1>{quoteId}</h1>;
};

export default QuoteDetail;
