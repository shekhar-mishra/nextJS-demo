import {useRouter} from 'next/router'
export default function CustomHomePage() {
    const router= useRouter()
      console.log("getting dynamic routees url===",router.query.customhomePage)
    return (
      <h1>This is Custom Home Page for all kind of page</h1>
    )
  }
  