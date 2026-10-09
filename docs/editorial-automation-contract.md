# Editorial intake and Gmail checkpoint contract

The GitHub Actions source inspection checks web accessibility, not editorial validity.
The daily JSON artifact reports total catalog coverage, rotating batch, HTTP access,
HTML-title extraction, and explicit `editorialStatus: unverified`.

## Gmail checkpoint format

Private Gmail data must not be committed to this public repository.
A connected, authorized processor should persist its own state in private storage:

```json
{
  "version": 1,
  "label": "Radar PLOT.",
  "processedMessageIds": [],
  "lastSuccessfulRun": null,
  "cursor": null
}
```

For each message, record the Gmail message ID and one outcome:
`new-candidate`, `duplicate`, `expired`, `not-relevant`, or `needs-review`.
Only add a message ID after its result is durably saved. Pagination tokens may
expire; deduplicate by message ID. Never infer processing from read/unread flags.

## Editorial publishing gate

Do not publish opportunities based only on HTTP 200 or HTML title.
Require original announcement URL, publisher, eligibility, deadline (or explicit
rolling status), checked-at timestamp, category, and duplicate comparison.
A candidate without those fields remains in review, not `data/opportunities.js`.
The same standard applies to datasets and tools, using their respective fields.
