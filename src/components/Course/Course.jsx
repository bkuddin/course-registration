import PropTypes from "prop-types"; // ES6

const Course = ({ course, handleSelectedCourses }) => {
  const {cover, title, body, price, credit } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <hr />
        <div className="card-actions justify-end">
          <p className="font-semibold">Price: <span className="text-sky-500 font-semibold">{price}</span></p>
          <p className="font-semibold text-right">Credit: <span className="text-red-500">{credit} hr</span></p>
        </div>
        <button className="btn bg-sky-500 text-white hover:text-sky-500" onClick={()=>handleSelectedCourses(course)}>Select</button>
        
        
      </div>
      
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourses: PropTypes.func.isRequired,
  
};

export default Course;
