import { JobCard } from "@/components/jobs/job-card"
import { JobsData } from "@/data/jobs";


export const Jobs = () => {

    return (
        <section className='grid grid-cols-1 gap-5 py-5 lg:grid-cols-3 md:grid-cols-2' id="jobs">
            <h1 className="text-2xl font-bold text-center md:text-3xl col-span-full">Serviços</h1>

            {JobsData.map(job => (
                <JobCard
                    key={job.id}
                    title={job.title}
                    icon={job.icon}
                />
            ))}


        </section>
    );

}
