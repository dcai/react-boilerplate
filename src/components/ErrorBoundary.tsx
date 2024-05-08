import * as React from "react";

/**
 * Convert an exception to a string
 * @param {exception} exception
 * @returns {string}
 */
function stringifyException(exception: Error | null): string {
  const replacer = (_key: string, error: unknown) => {
    if (error instanceof Error) {
      const result: Record<string, unknown> = {};

      Object.getOwnPropertyNames(error).forEach((propName: keyof Error) => {
        result[propName] = error[propName];
      });

      return result;
    }

    return error;
  };
  return JSON.stringify(exception, replacer);
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, _errorInfo: unknown) {
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
