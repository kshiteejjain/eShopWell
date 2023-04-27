import PageHeaders from '@/component/Head';
import { Counter } from '../features/counter/counter'

const About = () => {
    return (
        <>
        <PageHeaders title='About Us' />
            <h1>About Us</h1>
            <Counter />
        </>
    )
};

export default About;

