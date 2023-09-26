import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localStorage';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Remote'
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Onsite'
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.include(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <Helmet>
        <title>Career| Applied Jobs</title>
      </Helmet>
      <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>

      <div className="dropdown dropdown-end ml-44">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>On Site</a>
          </li>
        </ul>
      </div>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
