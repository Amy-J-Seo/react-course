import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

function NewQuotes() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
  };
  return (
    <QuoteForm
      isLoadingon={status === "pending"}
      onAddQuote={addQuoteHandler}
    />
  );
}

export default NewQuotes;
