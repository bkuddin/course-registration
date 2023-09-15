import PropTypes from "prop-types"; // ES6
import SelectedCourse from "../SelectedCourse/SelectedCourse";

const SelectedCourses = ({selectedCourses}) => {
    return (
        <div className="md:w-3/12">
            <h1>Selected</h1>

            {
                selectedCourses.map((course, idx) => <SelectedCourse key={idx} course={course} ></SelectedCourse> )
            }
            
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired 
}

export default SelectedCourses;