import React from 'react'
import ContentLoader from 'react-content-loader'

function SlugPlaceholder() {
  return (
    <ContentLoader
        speed={2}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="35" y="15" rx="2" ry="2" width="178" height="4"/>
        <rect x="35" y="30" rx="2" ry="2" width="178" height="4"/>
        <rect x="35" y="45" rx="2" ry="2" width="178" height="4"/>
        <rect x="35" y="60" rx="2" ry="2" width="178" height="4"/>
        <rect x="35" y="75" rx="2" ry="2" width="178" height="4"/>
        <rect x="35" y="90" rx="2" ry="2" width="178" height="20"/>
        <rect x="265" y="15" rx="2" ry="2" width="100" height="100"/>
      </ContentLoader>
  )
}

export default SlugPlaceholder