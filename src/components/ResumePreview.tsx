
import React from "react";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: TemplateType;
}

const ResumePreview = ({ resumeData, template }: ResumePreviewProps) => {
  // Classic Template
  const ClassicTemplate = () => (
    <div className="resume-template-container bg-white p-8 shadow-lg min-h-full">
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

  // Modern Template
  const ModernTemplate = () => (
    <div className="resume-template-container bg-white h-full">
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

  // Minimal Template
  const MinimalTemplate = () => (
    <div className="resume-template-container bg-white p-8 min-h-full">
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

  // Executive Template 
  const ExecutiveTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="bg-slate-900 text-white p-8">
        <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
        <p className="text-xl font-light mt-2">{resumeData.personalInfo.title}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-0">
        <div className="col-span-1 border-r pr-6 p-8 h-full">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-resume-slate uppercase mb-3">Contact</h2>
            {resumeData.personalInfo.email && (
              <p className="text-sm mb-2">{resumeData.personalInfo.email}</p>
            )}
            {resumeData.personalInfo.phone && (
              <p className="text-sm mb-2">{resumeData.personalInfo.phone}</p>
            )}
            {resumeData.personalInfo.location && (
              <p className="text-sm mb-2">{resumeData.personalInfo.location}</p>
            )}
            {resumeData.personalInfo.website && (
              <p className="text-sm mb-2">{resumeData.personalInfo.website}</p>
            )}
          </div>
          
          {resumeData.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-slate uppercase mb-3">Expertise</h2>
              <div className="space-y-2">
                {resumeData.skills.map((skill) => (
                  <p key={skill.id} className="text-sm">{skill.name}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="col-span-2 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-3">
              Professional Profile
            </h2>
            <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
          </div>

          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-4">
                Professional Experience
              </h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-resume-slate font-medium">{exp.company}</p>
                    <p className="text-sm text-resume-gray">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {exp.current 
                        ? ' Present' 
                        : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {resumeData.education.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-4">
                Education
              </h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-resume-gray">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {edu.current 
                        ? ' Present' 
                        : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                  </div>
                  <p className="font-medium mb-1">{edu.institution}</p>
                  {edu.description && <p className="text-sm">{edu.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Professional Template
  const ProfessionalTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="p-8 border-b-4 border-resume-green">
        <h1 className="text-3xl font-bold text-resume-green">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray mt-1">{resumeData.personalInfo.title}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {resumeData.personalInfo.email && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Email:</span>
              <span>{resumeData.personalInfo.email}</span>
            </div>
          )}
          {resumeData.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Phone:</span>
              <span>{resumeData.personalInfo.phone}</span>
            </div>
          )}
          {resumeData.personalInfo.location && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Location:</span>
              <span>{resumeData.personalInfo.location}</span>
            </div>
          )}
          {resumeData.personalInfo.website && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Website:</span>
              <span>{resumeData.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
            Professional Summary
          </h2>
          <p>{resumeData.personalInfo.summary}</p>
        </div>
        
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-resume-green mr-2"></div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {resumeData.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Professional Experience
            </h2>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-resume-gray-dark">{exp.position}</h3>
                  <span className="text-sm font-medium">
                    {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current 
                      ? ' Present' 
                      : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </span>
                </div>
                <p className="text-resume-green font-medium mb-2">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {resumeData.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Education
            </h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-resume-gray-dark">{edu.degree} in {edu.field}</h3>
                  <span className="text-sm font-medium">
                    {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {edu.current 
                      ? ' Present' 
                      : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </span>
                </div>
                <p className="text-resume-green font-medium mb-1">{edu.institution}</p>
                {edu.description && <p className="text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Creative Template
  const CreativeTemplate = () => (
    <div className="resume-template-container bg-white h-full flex">
      <div className="w-1/3 bg-resume-amber p-6 text-white h-full">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-1">{resumeData.personalInfo.name}</h1>
          <p className="text-lg">{resumeData.personalInfo.title}</p>
        </div>
        
        <div className="mb-6">
          <h2 className="uppercase text-sm font-bold mb-3 border-b border-white/30 pb-1">Contact</h2>
          {resumeData.personalInfo.email && (
            <p className="text-sm mb-2">{resumeData.personalInfo.email}</p>
          )}
          {resumeData.personalInfo.phone && (
            <p className="text-sm mb-2">{resumeData.personalInfo.phone}</p>
          )}
          {resumeData.personalInfo.location && (
            <p className="text-sm mb-2">{resumeData.personalInfo.location}</p>
          )}
          {resumeData.personalInfo.website && (
            <p className="text-sm mb-2">{resumeData.personalInfo.website}</p>
          )}
        </div>
        
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="uppercase text-sm font-bold mb-3 border-b border-white/30 pb-1">Skills</h2>
            <div className="space-y-3">
              {resumeData.skills.map((skill) => (
                <div key={skill.id}>
                  <p className="text-sm mb-1">{skill.name}</p>
                  {skill.level !== undefined && (
                    <div className="h-1.5 bg-white/20 rounded-full">
                      <div 
                        className="h-1.5 bg-white rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="uppercase text-sm font-bold mb-3 border-b border-white/30 pb-1">Education</h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <p className="font-semibold text-sm">{edu.degree} in {edu.field}</p>
                <p className="text-sm mb-1">{edu.institution}</p>
                <p className="text-xs opacity-80">
                  {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {edu.current 
                    ? ' Present' 
                    : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="w-2/3 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-resume-amber border-b-2 border-resume-amber-light pb-2 mb-4">
            About Me
          </h2>
          <p>{resumeData.personalInfo.summary}</p>
        </div>

        {resumeData.experience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-resume-amber border-b-2 border-resume-amber-light pb-2 mb-4">
              Work Experience
            </h2>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <span className="text-sm bg-resume-amber/10 text-resume-amber px-2 py-0.5 rounded">
                    {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current 
                      ? ' Present' 
                      : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </span>
                </div>
                <p className="font-medium text-resume-amber mb-2">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div id="resume-preview" className="resume-page">
      {template === "classic" ? (
        <ClassicTemplate />
      ) : template === "modern" ? (
        <ModernTemplate />
      ) : template === "minimal" ? (
        <MinimalTemplate />
      ) : template === "executive" ? (
        <ExecutiveTemplate />
      ) : template === "professional" ? (
        <ProfessionalTemplate />
      ) : template === "creative" ? (
        <CreativeTemplate />
      ) : (
        <ClassicTemplate />
      )}
    </div>
  );
};

export default ResumePreview;
