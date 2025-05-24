import About from './About';
import Skills from './Skills';

const Introduce = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative isolate">
            <About />
            <Skills />
        </section>
    );
}
export default Introduce;