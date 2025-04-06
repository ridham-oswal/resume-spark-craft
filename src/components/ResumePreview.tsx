
import React from "react";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: TemplateType;
}

const ResumePreview = ({ resumeData, template }: ResumePreviewProps) => {
  const ClassicTemplate = () => (
    <div className="bg-white p-8 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-resume-blue">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray">{resumeData.personalInfo.title}</p>
        <div className="flex justify-center flex-wrap gap-3 mt-2 text-sm text-resume-gray">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>• {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.location && <span>• {resumeData.personalInfo.location}</span>}
          {resumeData.personalInfo.website && <span>• {resumeData.personalInfo.website}</span>}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Professional Summary</h2>
        <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
      </div>

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Experience</h2>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{exp.position}</h3>
                <span className="text-sm text-resume-gray">
                  {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {exp.current 
                    ? ' Present' 
                    : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-blue italic">{exp.company}</p>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Education</h2>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{edu.institution}</h3>
                <span className="text-sm text-resume-gray">
                  {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {edu.current 
                    ? ' Present' 
                    : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-blue italic">{edu.degree} in {edu.field}</p>
              {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="text-sm bg-gray-100 rounded-full px-3 py-1">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const ModernTemplate = () => (
    <div className="bg-white">
      <div className="bg-resume-blue text-white p-8">
        <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
        <p className="text-xl mt-1">{resumeData.personalInfo.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2 mb-1">
                <span>Email:</span>
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <span>Phone:</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
          </div>
          <div>
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-2 mb-1">
                <span>Location:</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
            {resumeData.personalInfo.website && (
              <div className="flex items-center gap-2">
                <span>Website:</span>
                <span>{resumeData.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-resume-blue mb-3">About Me</h2>
          <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {resumeData.experience.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-resume-blue mb-4">Work Experience</h2>
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="mb-5 relative pl-6 border-l-2 border-resume-blue-light">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-resume-blue"></div>
                    <h3 className="font-bold text-resume-blue">{exp.position}</h3>
                    <p className="text-resume-gray italic mb-1">{exp.company}</p>
                    <p className="text-sm text-resume-gray mb-2">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {exp.current 
                        ? ' Present' 
                        : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resumeData.education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-resume-blue mb-4">Education</h2>
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="mb-5 relative pl-6 border-l-2 border-resume-blue-light">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-resume-blue"></div>
                    <h3 className="font-bold text-resume-blue">{edu.degree} in {edu.field}</h3>
                    <p className="text-resume-gray italic mb-1">{edu.institution}</p>
                    <p className="text-sm text-resume-gray mb-2">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {edu.current 
                        ? ' Present' 
                        : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {resumeData.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-resume-blue mb-4">Skills</h2>
              <div className="space-y-4">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      {skill.level !== undefined && <span>{skill.level}%</span>}
                    </div>
                    {skill.level !== undefined && (
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-resume-blue rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div className="bg-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-light">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray mt-1">{resumeData.personalInfo.title}</p>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8 text-sm text-resume-gray">
        {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
        {resumeData.personalInfo.phone && <span>• {resumeData.personalInfo.phone}</span>}
        {resumeData.personalInfo.location && <span>• {resumeData.personalInfo.location}</span>}
        {resumeData.personalInfo.website && <span>• {resumeData.personalInfo.website}</span>}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Profile</h2>
        <p>{resumeData.personalInfo.summary}</p>
      </div>

      {resumeData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Experience</h2>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">{exp.position}</h3>
                <span className="text-sm text-resume-gray">
                  {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {exp.current 
                    ? ' Present' 
                    : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-gray italic mb-2">{exp.company}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Education</h2>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">{edu.institution}</h3>
                <span className="text-sm text-resume-gray">
                  {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {edu.current 
                    ? ' Present' 
                    : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-gray italic mb-2">{edu.degree} in {edu.field}</p>
              {edu.description && <p className="text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="text-sm">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div id="resume-preview" className="resume-page">
      {template === "classic" ? (
        <ClassicTemplate />
      ) : template === "modern" ? (
        <ModernTemplate />
      ) : (
        <MinimalTemplate />
      )}
    </div>
  );
};

export default ResumePreview;
