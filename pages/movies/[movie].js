import fs from "fs";
import Head from 'next/head';

export default function Movie ({ movie }) {
    return (
        <>
            <Head>
                <title>{movie.name}</title>
            </Head>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
        </>
    );
}

export async function getStaticPaths() {
    const movies = JSON.parse(fs.readFileSync(`${process.cwd()}/static/movies.json`, 'utf-8'));
    const movie = movies.map(m => {
        return {
            params: {
                movie: m.rout
            }
        }
    });
    return {
        paths: movie,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const movies = JSON.parse(fs.readFileSync(`${process.cwd()}/static/movies.json`, 'utf-8'));
    const movie = movies.find(m => params.movie === m.rout)
    return {
        props: {
            movie
        }
    }
}