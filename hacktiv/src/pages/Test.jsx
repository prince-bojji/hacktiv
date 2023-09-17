import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from '../components/UserContext';

function CreateProject() {
  const [projectData, setProjectData] = useState({
    project_name: "",
    collaborator: "",
    deadline: "",
    project_details: "",
    status: "ongoing", // Default status
  });
  const { user } = useUserContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleAddProject = async () => {
    try {
      // Get the current user based on their email
      const targetEmail = user.email; // Use the logged-in user's email as the contributor
      const response = await axios.get(`http://localhost:3000/users?email=${targetEmail}`);
      const currentUser = response.data[0]; // Assuming there's only one user with the provided email

      if (!currentUser) {
        console.error('User not found');
        return;
      }

      // Create the new project
      const newProject = {
        project_name: projectData.project_name,
        status: projectData.status,
        deadline: projectData.deadline,
        collaborator: projectData.collaborator,
        project_details: projectData.project_details,
      };

      // Add the new project to the user's project array
      if (!currentUser.projects) {
        currentUser.projects = [];
      }
      currentUser.projects.push(newProject);

      // Update the user's data on the server
      await axios.put(`http://localhost:3000/users/${currentUser.id}`, currentUser);

      console.log("Project added:", newProject);
      
      // Reset the input fields after successful submission
      setProjectData({
        project_name: "",
        collaborator: "",
        deadline: "",
        project_details: "",
        status: "ongoing",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <>
      <div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[800px] md:h-[610px] xl:h-[620px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
        <h1 className={"border-transparent border border-solid border-b-secondary mb-4 min-[320px]:text-3xl lg:text-4xl font-bold pb-8"}>Create New Project</h1>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="project_name"
            value={projectData.project_name}
            onChange={handleInputChange}
            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
          />
        </div>
        <div>
          <label>Collaborators:</label>
          <input
            type="text"
            name="collaborator"
            value={projectData.collaborator}
            onChange={handleInputChange}
            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
          />
        </div>
        <div>
          <label>Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={projectData.deadline}
            onChange={handleInputChange}
            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={projectData.status}
            onChange={handleInputChange}
            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            {/* Add more status options as needed */}
          </select>
        </div>
        <div>
          <label>Project Details:</label>
          <textarea
            name="project_details"
            value={projectData.project_details}
            onChange={handleInputChange}
            className="border-tertiary-b border border-solid shadow-inner rounded-lg text-justify my-2 h-[250px] resize-none p-3 md:p-4 xl:p-5 w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleAddProject}
          className="bg-accent px-5 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal"
        >
          Create Project
        </button>
      </div>
    </>
  );
}

export default CreateProject;
