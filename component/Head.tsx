import Head from 'next/head';

interface Props {
    title: string
    }

const PageHeaders:React.FC<Props> = ({title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="eShop Well - Best Shopping Portal" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
};

export default PageHeaders;
