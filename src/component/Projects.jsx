import Project from './Project';
import R_Project from './R_Project';

const Projects = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} className="w-full min-h-screen bg-gray-100 py-8  flex flex-col  justify-center items-center">
            <Project />
            <R_Project />
            <Project />
        </section>
    );
}

export default Projects;