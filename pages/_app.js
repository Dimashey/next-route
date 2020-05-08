import {useRouter} from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <>
            <Component {...pageProps} />
            {router.route !== '/' && <a onClick={goBack}>&#8592; Back</a>}
        </>
    );
}