import React from "react";
import {
  useParams,
  Route,
  Link,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "hh", text: "dfdsf" },
  { id: "q2", author: "hh", text: "dfdsf" },
  { id: "q3", author: "hh", text: "dfdsf" },
];

function QuoteDetail() {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const queryParam = location.pathname;
  const match = useRouteMatch();
  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NoQuotesFound />;
  }

  const commentsHandler = () => {
    console.log(`${queryParam}/comments`);
    history.push(`${queryParam}/comments`);
  };
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <button onClick={commentsHandler}>ddddd</button>
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            See comments...
          </Link>
        </div>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
