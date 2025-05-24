import About from './About';
import Skills from './Skills';

const Introduce = () => {
    return (
        <div className="h-screen justify-center flex flex-col my-16 ">
            <About />
            <Skills />
        </div>
    );
}
export default Introduce;