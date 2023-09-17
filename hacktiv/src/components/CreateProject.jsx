import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../components/UserContext';

function CreateProject() {
  const [projectData, setProjectData] = useState({
    project_name: '',
    status: 'ongoing',
    deadline: '',
    contributor: '',
    project_details: '',
  });
  const { user } = useUserContext();

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'deadline') {
      const date = new Date(value);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;

      setProjectData({ ...projectData, [name]: formattedDate });
    } else {
      setProjectData({ ...projectData, [name]: value });
    }
  };

  const handleAddProject = async () => {
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

      const newProject = {
        project_name: projectData.project_name,
        status: projectData.status,
        deadline: projectData.deadline,
        contributor: projectData.contributor,
        project_details: projectData.project_details,
      };

      if (!currentUser.project) {
        currentUser.project = [];
      }
      currentUser.project.push(newProject);

      await axios.put(
        `http://localhost:3000/users/${currentUser.id}`,
        currentUser
      );

      alert('Project added successfully!', newProject);

      setProjectData({
        project_name: '',
        status: 'ongoing',
        deadline: '',
        contributor: '',
        project_details: '',
      });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className='bg-primary rounded p-5 text-white'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-3xl lg:text-4xl font-bold border-b border-secondary mb-4 pb-4'>
          Create New Project
        </h1>
        <div className='mb-4'>
          <label className='text-tertiary-b block'>Project Name:</label>
          <input
            type='text'
            name='project_name'
            value={projectData.project_name}
            onChange={handleInputChange}
            className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='text-tertiary-b block'>Status:</label>
          <select
            name='status'
            value={projectData.status}
            onChange={handleInputChange}
            className='border-tertiary-b border rounded-lg py-2 px-4 w-full'>
            <option value='ongoing'>Ongoing</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='text-tertiary-b block'>Deadline:</label>
          <input
            type='date'
            name='deadline'
            value={projectData.deadline}
            onChange={handleInputChange}
            className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='text-tertiary-b block'>Contributor:</label>
          <input
            name='contributor'
            value={projectData.contributor}
            onChange={handleInputChange}
            className='border-tertiary-b border rounded-lg py-2 px-4 w-full'
          />
        </div>
        <label className='text-tertiary-b block'>Project Details:</label>
        <textarea
          name='project_details'
          value={projectData.project_details}
          onChange={handleInputChange}
          className='border-tertiary-b border rounded-lg text-justify my-2 h-40 resize-none p-3 md:p-4 xl:p-5 w-full'
        />
        <div className='mt-4'>
          <button
            type='button'
            onClick={handleAddProject}
            className='bg-accent mx-auto flex text-secondary-a py-2 px-4 rounded hover:bg-accent-dark transition duration-300'>
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
