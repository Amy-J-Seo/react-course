import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuotes() {
  const addQuoteHandler = () => {
    console.log("dd");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuotes;
