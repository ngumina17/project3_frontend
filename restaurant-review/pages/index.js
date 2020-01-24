import Link from 'next/link';


function HomePage() {
    return (
      <>
    <div>Welcome to Next.js! </div>
   <Link href="/about">About Page</Link>
    </>
    )
  }
  
  export default HomePage