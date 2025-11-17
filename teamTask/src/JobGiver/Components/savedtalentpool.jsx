import React from 'react';
import './savedtalentpool.css';
import avatarMayank from './images/Primitive.img.svg';
import avatarAnkit from './images/Primitive.img1.svg';
import avatarPriya from './images/Primitive.img2.svg';
import messageIcon from './images/message.svg';
import userIcon from './images/pp.svg';
const savedtalentpool = () => {
  const savedTalents = [
    { id: 1, name: "Mayank Kumar", role: "Sr. UX Designer", avatar: avatarMayank },
    { id: 2, name: "Ankit Singh", role: "Product Manager", avatar: avatarAnkit },
    { id: 3, name: "Priya Sharma", role: "Frontend Developer", avatar:  avatarPriya },
  ];

  return (
    <div className="saved-talent-pool card">
      <div className="talent-pool-header flex-between mb-3">
        <h3>Saved Talent Pool</h3>
        <a href="#view-all" className="view-all-link">View All</a>
      </div>
      <ul className="talent-list">
        {savedTalents.map(talent => (
          <li key={talent.id} className="talent-item flex-between">
            <div className="talent-info flex-center">
              <img src={talent.avatar} alt={talent.name} className="talent-avatar" /> 
              <div>
                <h4 className="talent-name">{talent.name}</h4>
                <p className="talent-role">{talent.role}</p>
              </div>
            </div>
            <div className="talent-actions">
              <button className="btn-ghost"><img src={messageIcon} alt="Contact" className="icon" />Contact</button> 
              <button className="btn-ghost"><img src={userIcon}alt="View Profile" className="icon" />View Profile</button> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default savedtalentpool;