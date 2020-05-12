import Link from "next/link";
import Head from "next/head";
import {useEffect, useState} from "react";


export default function About() {
    const [jsonGreetings, setJsonGreetings] = useState(null);

    useEffect( () => {
        fetch('api/hello')
            .then(data => data.json())
            .then(d => {
                const viewData = JSON.stringify(d, null, '</br>')
                setJsonGreetings(viewData);
            });
    }, [])

    return (
        <>
            <Head>
                <title>about</title>
            </Head>
            <Link href="/movies">
                <a><h2>My favorite movies</h2></a>
            </Link>
            <div>
                {jsonGreetings}
            </div>
        </>
    );
}