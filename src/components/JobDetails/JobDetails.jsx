import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const { job_title } = job;
  console.log(job);
  return (
    <div>
      <h2>{job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details Coming</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <Link to={`/job/${id}`}>
            <button className="btn text-white px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
