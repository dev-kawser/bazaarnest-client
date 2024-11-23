import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";


const Blogs = () => {
    return (
        <div>
            <TinnyBanner title={"Blog Page"} currentPath={"blogs"} />
            <div className="container">

            </div>

            <Newsletter />
        </div>
    );
};

export default Blogs;