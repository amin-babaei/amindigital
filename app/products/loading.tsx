"use client"
import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:'300px'}}>
            <Spinner animation="border" variant="primary" />
        </div>
    )
  }