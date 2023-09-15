import PropTypes from "prop-types"; // ES6
import SelectedCourse from "../SelectedCourse/SelectedCourse";

const SelectedCourses = ({selectedCourses, hours, remainingTime, totalPrice}) => {
    
    return (
        <div className="md:w-3/12">
            <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-black">Credit Hour Remaining: <span className="text-sky-500">{remainingTime}</span> hr</h3>
                <hr />
                <h2 className="text-xl font-bold my-6">Course Name</h2>
                <hr />
                 <ol className="list-decimal">
                      {
                         selectedCourses.map((course, idx) => <SelectedCourse 
                         key={idx} 
                         course={course}
                         totalPrice={totalPrice}>

                         </SelectedCourse> )
                      }
                 </ol>
                 <hr />
                <h3 className="text-xl text-gray-400 font-bold my-4">Total Credit Hour: <span className="text-sky-500">{hours}</span></h3>
                 <hr />
                 <h3 className="font-extrabold text-2xl mt-4">Total price: <span className="text-sky-500">${totalPrice}</span></h3>
            
            </div>
             
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    hours: PropTypes.number.isRequired,
    remainingTime: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,

}

export default SelectedCourses;