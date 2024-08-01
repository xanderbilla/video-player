import { Suspense } from 'react'
import VidPlayer from '@/app/Layout/VidPlayer'
import Loading from '@/app/components/Loading'

function SearchBarFallback() {
  return <Loading/>
}
 
export default function Page() {
  return (
    <>
        <Suspense fallback={<SearchBarFallback />}>
          <VidPlayer/>
        </Suspense>
    </>
  )
}