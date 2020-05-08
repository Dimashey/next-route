import fs from 'fs';
import Link from "next/link";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from 'next/head';

export default function Movies({movies}) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>movies</title>
            </Head>
            {movies.map(m => {
                return (
                    <Fragment key={Math.random() * Date.now()}>
                        <h3>
                            <strong>{m.name}</strong>
                            <Link
                                href={`${router.pathname}/[movie]`} as={`${router.pathname}/${m.rout}`}>
                                <a> --> </a>
                            </Link>
                        </h3>
                    </Fragment>
                    )
                })
            }
        </>
    );
}

export async function getStaticProps() {
    const movies = JSON.parse(fs.readFileSync(`${process.cwd()}/static/movies.json`, 'utf-8'));
    return {
        props: {
            movies
        }
    };
}