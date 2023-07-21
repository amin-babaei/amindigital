'use client'

import { Button } from 'react-bootstrap'
 
export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
    <h3 className="py-1">به نظر یک خطایی به وجود آمده است !</h3>
    <Button
      variant="primary"
      type="button"
      onClick={() => reset()}
    >
      تلاش مجدد
    </Button>
  </div>
  )
}