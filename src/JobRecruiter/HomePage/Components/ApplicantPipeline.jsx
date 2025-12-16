import React from 'react';
import AlexAvatar from '../Images/Alex.svg';
import MariaAvatar from '../Images/Maria.svg';
import JamesAvatar from '../Images/James.svg';
import EmilyAvatar from '../Images/Emily.svg';
import DavidAvatar from '../Images/David.svg';
import SarahAvatar from '../Images/Sarah.svg';
import MichaelAvatar from '../Images/Michael.svg';
import JenniferAvatar from '../Images/Jennifer.svg';
const pipelineStages = [
    { title: "New Applicants", count: 3, color: "bg-gray-200 text-gray-700", candidates: [
        { name: "Alex Thompson", role: "Frontend Developer", experience: "5 years", avatarSrc: AlexAvatar },
        { name: "Maria Garcia", role: "UX Designer", experience: "3 years", avatarSrc: MariaAvatar },
        { name: "James Wilson", role: "Backend Engineer", experience: "7 years", avatarSrc: JamesAvatar},
    ]},
    { title: "In Review", count: 2, color: "bg-yellow-200 text-yellow-800", candidates: [
        { name: "Emily Chen", role: "Product Manager", experience: "6 years", avatarSrc:    EmilyAvatar },
        { name: "David Brown", role: "DevOps Engineer", experience: "4 years", avatarSrc: DavidAvatar},
    ]},
    { title: "Interview Scheduled", count: 2, color: "bg-purple-200 text-purple-800", candidates: [
        { name: "Sarah Johnson", role: "Frontend Developer", experience: "5 years", avatarSrc: SarahAvatar },
        { name: "Michael Lee", role: "UX Designer", experience: "4 years", avatarSrc: MichaelAvatar},
    ]},
    { title: "Hired", count: 1, color: "bg-green-200 text-green-800", candidates: [
        { name: "Jennifer Davis", role: "Backend Engineer", experience: "8 years", hired: true, avatarSrc: JenniferAvatar},
    ]},
];

const ApplicantCard = ({ candidate }) => (
    <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center mb-2">
            <img 
                src={candidate.avatarSrc} 
                alt={candidate.name} 
                className="w-8 h-8 rounded-full mr-3 object-cover"
            />
            <div>
                <p className="font-semibold text-sm text-gray-900">{candidate.name}</p>
                <p className="text-xs text-gray-600">{candidate.role}</p>
            </div>
        </div>
        <p className="text-xs text-gray-500 mb-3">{candidate.experience}</p>
        <div className="flex space-x-2">
            {candidate.hired ? (
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 w-full">Contact</button>
            ) : (
                <>
                    <button className="text-xs border border-gray-300 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-50">Message</button>
                    <button className="text-xs bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Schedule</button>
                </>
            )}
        </div>
    </div>
);

const ApplicantPipeline = () => (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Applicant Pipeline</h2>
      <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
        {pipelineStages.map(stage => (
          <div key={stage.title} className="flex-shrink-0 w-[280px] md:w-72 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">{stage.title}</h3>
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${stage.color}`}>{stage.count}</span>
            </div>
            <div className="space-y-3">
              {stage.candidates.map(candidate => (
                <ApplicantCard key={candidate.name} candidate={candidate} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default ApplicantPipeline;