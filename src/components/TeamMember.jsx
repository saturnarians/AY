import React from 'react';
import { useLanguageContext } from "../context/LanguageContext";

const TeamMember = ({ id, image, name }) => {
    const { t } = useLanguageContext();
  return (
    <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden mb-2">
      <img src={image} alt={name} className="w-full h-56 object-contain" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <h3 className="text-sm text-gray-700 mb-4">{t(`aboutPage.teamMembers.${id}.title`)}</h3>
      <p className="text-gray-600">{t(`aboutPage.teamMembers.${id}.description`)}</p>
      </div>
    </div>
  );
};

export default TeamMember;
