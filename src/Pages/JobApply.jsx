import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

function JobApply() {
  const [openJob, setOpenJob] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const jobs = [
    {
      title: "Sales Executive",
      description:
        "Accomplishes business development activities by researching and developing marketing opportunities and plans; implementing sales plans; managing staff.",
      qualifications: "12th/Any",
      experience: "0-4 years of Sales & Marketing experience. (Freshers can also apply)",
      skills: [
        "Excellent verbal and written communication and presentation skills.",
        "Must have deep desire to work and succeed in a growing organization with total commitment and sense of job ownership.",
        "Able to build credible relationships with influencing ability."
      ]
    },
    {
      title: "Developer Trainee (react Js Developer, Python Developer)",
      // description: "Looking for freshers with basic PHP knowledge."
    }
  ];

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* services */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Jobs Openings</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">Jobs</span>
        </div>
      </div>

      {/* Job Apply Application */}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Jobs Openings</h2>
        <p className="text-center text-gray-600 mb-6">Join our Fabulous Team of Intelligent Individuals</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Job Listings */}
          <div>
            {jobs.map((job, index) => (
              <div key={index} className="mb-4 border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-4 bg-gray-200 font-semibold flex justify-between items-center"
                  onClick={() => setOpenJob(openJob === index ? null : index)}
                >
                  {job.title}
                  <span>{openJob === index ? "-" : "+"}</span>
                </button>
                {openJob === index && (
                  <div className="p-4 bg-white border-t">
                    <p className="text-sm text-gray-700">{job.description}</p>
                    {job.qualifications && <p className="text-sm mt-2 font-semibold">Qualifications: {job.qualifications}</p>}
                    {job.experience && <p className="text-sm mt-2">Experience: {job.experience}</p>}
                    {job.skills && (
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        {job.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Job Application Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input {...register("name", { required: true })} type="text" placeholder="Your Name *" className="border p-2 w-full rounded" />
                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                
                <input {...register("dob")} type="date" placeholder="Date of Birth" className="border p-2 w-full rounded" />
                
                <input {...register("email", { required: true })} type="email" placeholder="Your Email *" className="border p-2 w-full rounded" />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                
                <input {...register("phone", { required: true })} type="tel" placeholder="Phone Number *" className="border p-2 w-full rounded" />
                {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
                
                <input {...register("location", { required: true })} type="text" placeholder="Location *" className="border p-2 w-full rounded" />
                {errors.location && <p className="text-red-500 text-sm">Location is required</p>}
                
                <select {...register("department", { required: true })} className="border p-2 w-full rounded">
                  <option value="">Select Department</option>
                  <option value="Sales">Sales</option>
                  <option value="Development">Development</option>
                </select>
                {errors.department && <p className="text-red-500 text-sm">Department is required</p>}
              </div>
              <textarea {...register("message")} placeholder="Your Message" className="border p-2 w-full rounded h-20"></textarea>
              <input {...register("resume")} type="file" className="border p-2 w-full rounded" accept="application/pdf" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JobApply;
