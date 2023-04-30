import PageHeaders from '@/component/Head';
interface dataTypes {
    map: any;
    data: object;
    props: string;
    context: any
}

const About = (props: dataTypes) => {
    
    return (
        <>
        <PageHeaders title='About Us' />
            <h1>About Us</h1>
        </>
    )
};

export default About;

