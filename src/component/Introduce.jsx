import About from './About';
import Skills from './Skills';

const Introduce = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} className="min-h-screen flex flex-col justify-center relative isolate">
            <About />
            <Skills />
        </section>
    );
}
export default Introduce;