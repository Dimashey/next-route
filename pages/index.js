import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
      <>
          <Head>
              <title>home</title>
          </Head>
          <div className="container">
              <h1>Dmytro Sheiko</h1>
              <Link href="/about"><a>About Me</a></Link>
          </div>
      </>
  )
}
