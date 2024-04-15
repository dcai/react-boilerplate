import React from "react";

/**
 * Convert an exception to a string
 * @param {exception} exception
 * @returns {string}
 */
function stringifyException(exception) {
  const replacer = (key, value) => {
    if (value instanceof Error) {
      const error = {};

      Object.getOwnPropertyNames(value).forEach((propName) => {
        error[propName] = value[propName];
      });

      return error;
    }

    return value;
  };
  return JSON.stringify(exception, replacer);
}
export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }
  componentDidCatch(error, _errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error, hasError: true });
  }
  render() {
    if (this.state.hasError) {
      console.error("!!ErrorBoundary.render():", this.state);
      // You can render any custom fallback UI
      return (
        <>
          <h1>You hit the error boundary</h1>
          <pre style={{ border: "1px solid blue", padding: "1em" }}>
            <code
              style={{
                fontSize: "1.1em",
                lineHeight: "2em",
                whiteSpace: "pre-wrap",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {stringifyException(this.state.error)}
            </code>
          </pre>
        </>
      );
    }
    return this.props.children;
  }
}
