import Link from "next/link";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>about</title>
            </Head>
            <Link href="/movies">
                <a><h2>My favorite movies</h2></a>
            </Link>
        </>
    );
}