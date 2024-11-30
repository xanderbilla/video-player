import Image from 'next/image';
import Link from 'next/link';

interface Props {}

export default function NotFound({}: Props) {
  return (
    <div className="min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center ">
      <Image src="/db/images/404.svg" alt="Not Found" width={360} height={360} />
      <h1 className="text-4xl font-bold mt-8">Page Not Found</h1>
      <p className="text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
      <div className="mt-8">
        <Link href="/" className="px-4 border py-2 text-lg font-medium bg-gray-900 text-white rounded-full hover:bg-gray-600 transition duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  );
}