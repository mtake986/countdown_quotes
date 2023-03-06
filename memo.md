

The code below are programming learnings as I build the app.


## Structure key-dictionary model (num:{})

``` javascript
export interface IMyQuotesBeingChanged {
  [currentQuoteIndex: number]: IQuote;
}
setMyQuotesBeingChanged([
  ...myQuotesBeingChanged,
  {
    [currentQuoteIndex]: {
      quoteText: myQuotes[currentQuoteIndex].quoteText,
      speakerName: speakerNameInputText,
      uid: myQuotes[currentQuoteIndex].uid,
    },
  },
]);
```
