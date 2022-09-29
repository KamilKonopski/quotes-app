import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Kamil", text: "Learning React is fun" },
	{ id: "q2", author: "Kamilo", text: "Learning TypeScript is fun" },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
