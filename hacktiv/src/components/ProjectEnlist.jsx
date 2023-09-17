import React, { useState, useRef, useEffect } from 'react';
import CreateProject from './CreateProject';
import EditProject from './EditProject';
import jsonData from '../data/db.json';

function ProjectEnlisting(props) {
  const targetEmail = 'johanten22@gmail.com';
  const targetUser = jsonData.users.find(user => user.email === targetEmail);

  if (!targetUser) {
    return <div>User not found</div>;
  }

  const projectData = targetUser.project;

  const [isCreating, setIsCreating] = useState(false);
  const [isEdit, setIsEditing] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // When the create new project button is clicked
  const onCreating = () => {
    setIsCreating(true);
  };

  const onEdit = index => {
    setIsEditing(true);
    setSelectedProjectIndex(index);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    setSelectedProjectIndex(null);
  };

  return (
    <>
      {!isCreating && !isEdit ? (
        <>
          <button
            className='bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right '
            onClick={onCreating}>
            Create New Project
          </button>
          <p className='my-14'></p>
          <div
            className={
              'bg-accent rounded-t p-4 border border-secondary border-solid border-b-tertiary-a min-[320px]:text-md lg:text-md font-bold pb-4 mt-7 shadow-[0_0_1px_1px_rgba(0,0,0,0.25)]'
            }>
            Project
          </div>
          <div
            className={
              'bg-primary border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100'
            }>
            <div class='relative'>
              <table className='w-full text-sm text-left text-tertiary-a'>
                <thead className='border-b text-xs text-secondary uppercase bg-primary'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Project name
                    </th>
                    <th scope='col' className='hidden md:table-cell px-6 py-3'>
                      Status
                    </th>
                    <th scope='col' className='hidden md:table-cell px-6 py-3'>
                      Deadline
                    </th>
                    <th scope='col' className='hidden md:table-cell px-6 py-3'>
                      Details
                    </th>
                    <th scope='col' className='hidden md:table-cell px-6 py-3'>
                      {/* Empty column header */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr key={index} className='bg-primary border-t '>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-secondary whitespace-nowrap'>
                        {project.project_name}
                      </th>

                      <td className='hidden md:table-cell px-6 py-4'>
                        {project.status}
                      </td>
                      <td className='hidden md:table-cell px-6 py-4'>
                        {project.deadline}
                      </td>
                      <td className='hidden md:table-cell px-6 py-4'>
                        {project.project_details}
                      </td>
                      <td className='hidden md:table-cell px-6 py-4 text-right'>
                        <button
                          className='bg-[#FFDA55] hover:bg-[#fecf26] text-black py-1 px-5 rounded'
                          onClick={() => onEdit(index)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : isCreating ? (
        <>
          <div className='justify-center items-center h-max'></div>
          <CreateProject />
        </>
      ) : isEdit ? (
        <>
          <div className='justify-center items-center h-max'></div>
          <EditProject
            onCancelEdit={onCancelEdit}
            project={projectData[selectedProjectIndex]}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProjectEnlisting;
