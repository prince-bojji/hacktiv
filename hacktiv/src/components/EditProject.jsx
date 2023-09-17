import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../components/UserContext';

function EditProject() {
  const [isCancel, setIsCancel] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [collaborator, setCollaborator] = useState('');
  const [projectData, setProjectData] = useState({
    project_name: '',
    status: 'ongoing',
    deadline: '',
    contributor: '',
    project_details: '',
  });
  const { user } = useUserContext();

  const onCancel = () => {
    setIsCancel(true);
  };

  const onDelete = () => {
    setIsDelete(true);
  };

  const onArchived = () => {
    setIsArchived(true);
  };

  const onSaved = () => {
    setIsSaved(true);
  };

  const options = ['ongoing', 'completed'];

  const toggleDropdown = () => {
    setSelectedOption(!selectedOption);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setProjectData({ ...projectData, status: option });
  };

  const handleCollaboratorChange = e => {
    setCollaborator(e.target.value);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'deadline') {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`; 

      setProjectData({ ...projectData, [name]: formattedDate });
    } else {
      setProjectData({ ...projectData, [name]: value });
    }
  };

  const handleUpdateProject = async () => {
    try {
      const targetEmail = user.email;
      const response = await axios.get(
        `http://localhost:3000/users?email=${targetEmail}`
      );
      const currentUser = response.data[0];

      if (!currentUser) {
        console.error('User not found');
        return;
      }

      const projectNameToUpdate = projectData.project_name;

      if (!currentUser.project) {
        currentUser.project = [];
      }

      const projectToUpdate = currentUser.project.find(
        project => project.project_name === projectNameToUpdate
      );

      if (!projectToUpdate) {
        console.error('Project not found');
        return;
      }

      if (collaborator) {
        projectData.contributor = collaborator;
      }

      projectToUpdate.status = projectData.status;
      projectToUpdate.deadline = projectData.deadline;
      projectToUpdate.contributor = projectData.contributor;
      projectToUpdate.project_details = projectData.project_details;

      await axios.put(
        `http://localhost:3000/users/${currentUser.id}`,
        currentUser
      );

      alert('Project updated successfully!', projectToUpdate);

      setProjectData({
        project_name: '',
        status: 'Ongoing',
        deadline: '',
        contributor: '',
        project_details: '',
      });

      setCollaborator('');
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <>
      {!isCancel && !isSaved && !isDelete && !isArchived ? (
        <>
          <div className='bg-primary rounded p-5 text-white'>
            <div className='max-w-screen-lg mx-auto'>
              <div className='flex flex-col mb-4'>
                <div className='border-b border-secondary mb-4 text-3xl lg:text-4xl font-bold pb-8'>
                  Edit Project
                </div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                  {/* Project Name */}
                  <div className='col-span-1'>
                    <label className='text-sm text-tertiary-b text-center'>
                      Project Name
                    </label>
                    <input
                      name='project_name'
                      className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
                      value={projectData.project_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Project Status */}
                  <div className='col-span-1'>
                    <label className='text-sm text-tertiary-b block text-center mt-1'>
                      Project Status
                    </label>
                    <div className='relative'>
                      <button
                        onClick={toggleDropdown}
                        className='bg-primary text-accent-c px-4 py-2 rounded focus:outline-none w-full mt-2'>
                        {selectedOption || projectData.status}
                      </button>
                      {selectedOption && (
                        <div className='absolute mt-2 w-48 bg-primary border border-gray-300 rounded shadow-lg'>
                          {options.map(option => (
                            <div
                              key={option}
                              onClick={() => handleOptionClick(option)}
                              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Project Deadline */}
                  <div className='col-span-1'>
                    <label className='text-sm text-tertiary-b'>Deadline</label>
                    <input
                      type='date'
                      name='deadline'
                      className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
                      value={projectData.deadline}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* Project Details */}
                <label className='text-sm text-tertiary-b'>
                  Project Details
                </label>
                <textarea
                  name='project_details'
                  className='border-tertiary-b border rounded-lg text-justify my-2 h-40 resize-none py-3 px-4 w-full'
                  value={projectData.project_details}
                  onChange={handleInputChange}
                />
                <div className='flex flex-wrap space-y-4 md:flex-nowrap md:space-y-0 md:space-x-4 xl:space-x-5'>
                  <div className='flex-grow'>
                    <div className='flex items-center'>
                      {/* Collaborators */}
                      <div className='w-full'>
                        <label className='text-sm text-tertiary-b'>
                          Collaborators
                        </label>
                        <input
                          type='search'
                          name='project collaborator'
                          className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
                          value={collaborator}
                          onChange={handleCollaboratorChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='float-right flex flex-column w-max gap-8 font-extralight text-sm mt-4'>
                  <button
                    className='bg-accent px-5 py-2 rounded text-secondary-a text-lg'
                    onClick={handleUpdateProject}>
                    Save
                  </button>
                  <button
                    className='text-tertiary-a font-normal text-lg'
                    onClick={onCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <ProjectEnlist />
        </>
      )}
    </>
  );
}

export default EditProject;
