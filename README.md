# Error Handling in Next.js 16.2

Interactive demo comparing error handling approaches in Next.js 16.2: `react-error-boundary` (before) vs the workaround (digest filtering + key reset) vs the built-in `catchError` API (after).

## What this demonstrates

Next.js provides `error.tsx` for route-level error handling out of the box. But when you need more granular, component-level error boundaries within a page, you need a different approach.

A `UserProfile` server component cycles through success, a database error, and `notFound()`. Three tabs show how each approach handles component-level errors:

- **Before** — `react-error-boundary` catches _all_ errors, including framework-internal ones like `notFound()` and `redirect()`. `reset()` only clears client state without re-fetching server component data.
- **Workaround** — Wraps data fetching in try/catch to filter and rethrow Next.js internal errors by checking the `digest` property. Uses an ErrorBoundary `key` change + `router.refresh()` inside `startTransition` to properly re-fetch server component data on retry.
- **After** — `catchError` is framework-aware. `retry()` re-fetches server component data, and `notFound()`/`redirect()` propagate correctly to the framework.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Relevant docs

- [Error Handling guide](https://nextjs.org/docs/app/getting-started/error-handling)
- [`catchError`](https://nextjs.org/docs/app/api-reference/functions/catchError)
- [`refresh`](https://nextjs.org/docs/app/api-reference/functions/refresh)
- [`error.js` file convention](https://nextjs.org/docs/app/api-reference/file-conventions/error)
- [`not-found.js` file convention](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

## Tech stack

- [Next.js 16.2](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
