import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "hh", text: "dfdsf" },
  { id: "q2", author: "hh", text: "dfdsf" },
  { id: "q3", author: "hh", text: "dfdsf" },
];

function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}

export default AllQuotes;
