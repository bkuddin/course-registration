import PropTypes from "prop-types"; // ES6
import SelectedCourse from "../SelectedCourse/SelectedCourse";

const SelectedCourses = ({selectedCourses, hours, remainingTime}) => {
    
    return (
        <div className="md:w-3/12">
            <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl text-sky-500 font-black">Credit Hour Remaining: {remainingTime}hr</h3>
                <hr />
                <h2 className="text-xl font-bold my-6">Course Name</h2>
                <hr />
                 <ol className="list-decimal">
                      {
                         selectedCourses.map((course, idx) => <SelectedCourse key={idx} course={course}></SelectedCourse> )
                      }
                 </ol>
                 <hr />
                <h3 className="text-xl text-gray-400 font-bold my-4">Total Credit Hour :{hours}</h3>
                 <hr />
                 <h3>Total price: </h3>
            
            </div>
             
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    hours: PropTypes.object.isRequired,
    remainingTime: PropTypes.func.isRequired,

}

export default SelectedCourses;