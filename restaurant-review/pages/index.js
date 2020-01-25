import Link from 'next/link';
import Header from '../components/Header'
import Restraunt_form from '../components/Restraunt_form'

function HomePage() {
    return (
      <>
    <Header/>
        <Link href="/RvwForm"><a>Review Form</a></Link>
    </>
    )
  }
  
  export default HomePage