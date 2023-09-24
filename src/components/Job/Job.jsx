import PropTypes from 'prop-types';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job || {};
  return (
    <div className="card card-compact py-6 bg-base-100 shadow-xl hover:shadow-[#10171e] hover:shadow-2xl hover:delay-75">
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-left">{company_name}</p>
        <div className="text-left">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE] ">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <h2 className="flex items-center">
            <MdLocationOn className="text-2xl mr-2"></MdLocationOn>
            {location}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
            Salary: {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
