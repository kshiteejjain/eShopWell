import PageHeaders from '@/component/Head';
import { Counter } from '../features/counter/counter'
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
            <Counter />
        </>
    )
};

export default About;

