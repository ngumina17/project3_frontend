import Link from 'next/link';
import Header from '../components/Header'


function HomePage() {
    return (
      <div>
    <Header/>
        <Link href="/RvwForm"><a>Review Form</a></Link>
        <Link href="/Search"><a>Search</a></Link>
        <Link href="/RestForm"><a>Restraunt Form</a></Link>
    </div>
    )
  }
  
  export default HomePage