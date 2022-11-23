import React, { useEffect } from "react";
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
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const queryParam = location.pathname;
  const match = useRouteMatch();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && !loadedQuote) {
    return <NoQuotesFound />;
  }

  const commentsHandler = () => {
    console.log(`${queryParam}/comments`);
    history.push(`${queryParam}/comments`);
  };
  console.log(loadedQuote);

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
