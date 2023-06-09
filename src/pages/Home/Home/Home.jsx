import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Featured></Featured>
        </div>
    );
};

export default Home;