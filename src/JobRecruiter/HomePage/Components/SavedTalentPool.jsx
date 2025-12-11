import React from 'react';
import RachelAvatar from "../Images/Rachel.svg";
import TomAvatar from "../Images/Tom.svg";
import LisaAvatar from "../Images/Lisa.svg";
import KevinAvatar from "../Images/Kevin.svg";
const talentPool = [
    { 
        name: "Rachel Adams", 
        role: "Marketing Specialist", 
        experience: "4 years", 
        skills: ["Marketing", "Social Media"],
        avatarSrc: RachelAvatar,
    },
    { 
        name: "Tom Martinez", 
        role: "Full Stack Developer", 
        experience: "6 years", 
        skills: ["Tech Talent", "Javascript"],
        avatarSrc:TomAvatar, 
    },
    { 
        name: "Lisa Wong", 
        role: "Data Analyst", 
        experience: "3 years", 
        skills: ["Analytics", "Python"],
        avatarSrc: LisaAvatar,
    },
    { 
        name: "Kevin Foster", 
        role: "Intern - Design", 
        experience: "1 year", 
        skills: ["Interns", "Design"],
        avatarSrc: KevinAvatar
    },
];

const TalentCard = ({ candidate }) => (
    <div className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <img 
            src={candidate.avatarSrc} 
            alt={candidate.name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
        /> 
        <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <p className="font-semibold text-gray-900">{candidate.name}</p>
                    <p className="text-sm text-gray-600">{candidate.role}</p>
                    <p className="text-xs text-gray-500">{candidate.experience}</p>
                </div>
                <span className="text-yellow-500 text-xl">⭐</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
                {candidate.skills.map(skill => (
                    <span key={skill} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
            
            <div className="flex space-x-2">
                <button className="text-sm border border-gray-300 px-4 py-1.5 rounded-lg text-gray-700 hover:bg-gray-100">Contact</button>
                <button className="text-sm bg-blue-900 text-white px-4 py-1.5 rounded-lg hover:bg-blue-950">View Profile</button>
            </div>
        </div>
    </div>
);

const SavedTalentPool = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Saved Talent Pool</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talentPool.map(candidate => (
                <TalentCard key={candidate.name} candidate={candidate} />
            ))}
        </div>
    </div>
  );
};

export default SavedTalentPool;