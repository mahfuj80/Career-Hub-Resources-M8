import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const { job_title } = job;
  const handleApplyJob = () => {
    saveJobApplication(parseInt(id));
    toast('You Have Applied Successfully');
  };
  return (
    <div>
      <Helmet>
        <title>Job Details</title>
      </Helmet>
      <h2>{job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details Coming</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>

          <button
            onClick={() => handleApplyJob()}
            className="btn text-white px-8 bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
