import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { ContactInfo as ContactInfoType, SocialLink } from '../../types/contact';

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
};

interface ContactInfoProps {
  info: ContactInfoType;
}

export default function ContactInfo({ info }: ContactInfoProps) {
  const Icon = iconMap[info.icon as keyof typeof iconMap];

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
        <div className="mt-2 text-gray-600">
          {info.details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}