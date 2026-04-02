# Error Handling

> How errors are handled in this project.

---

## Overview

Backend error handling is minimal and explicit.
The server reads a requested file from the local preview root and returns a plain-text HTTP error when the read fails or the path is invalid.
There are no custom error classes and no centralized error middleware.

---

## Error Types

Current backend behavior effectively handles these cases:

- `404 Not Found` when the requested (sanitized) file does not exist (`fs.readFile` returns `ENOENT`)
- `500 Server Error` for other filesystem read errors
- `403 Forbidden` only if the computed file path does not stay under the configured static preview root (defense-in-depth guard)

In practice, path traversal attempts are normalized/sanitized into a safe path under the static preview root, so they typically end up as a `404 Not Found` rather than a `403`.

This logic lives directly in `server.js`.

---

## Error Handling Patterns

- Normalize the request path before joining it with the static preview root
- Check the resulting path prefix to prevent directory traversal
- Set the HTTP status code explicitly
- Return a short plain-text response body
- Stop execution immediately after sending the error response

Examples:
- path normalization and traversal guard in `server.js`
- file read branching in `server.js`

---

## API Error Responses

There is no JSON API error format.
Current responses are plain text:

- `403 Forbidden`
- `404 Not Found`
- `500 Server Error`

If backend work remains static file preview, preserve this simplicity.
If the project later adds APIs, define a real API error contract at that time.

---

## Common Mistakes

- Adding framework-style error abstractions when the server only previews static files
- Returning inconsistent status codes for missing files versus invalid paths
- Forgetting to stop execution after `res.end(...)`
- Trusting raw request paths without normalization and prefix validation
