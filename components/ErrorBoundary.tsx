import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <h3 className="py-1">به نظر یک خطایی به وجود آمده است !</h3>
          <Button
            variant="primary"
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            تلاش مجدد
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
