import { Suspense } from 'react'
import VidPlayer from '../../Layout/VidPlayer'

function SearchBarFallback() {
  return <>placeholder</>
}
 
export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <VidPlayer/>
        </Suspense>
      </nav>
    </>
  )
}