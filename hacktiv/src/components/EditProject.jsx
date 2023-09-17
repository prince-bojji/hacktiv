import React, { useState } from "react";
import ProjectEnlist from './ProjectEnlist';

function EditProject(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCancel, setIsCancel] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [collaborator, setCollaborator] = useState('');

  // When the create new project button is clicked
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

  const options = ['Ongoing', 'Completed'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCollaboratorChange = (e) => {
    setCollaborator(e.target.value);
  };

  const handleAddCollaborator = () => {
    // Implement your logic to add a collaborator here
    console.log(`Adding collaborator: ${collaborator}`);
    // Reset the input field
    setCollaborator('');
  };

  // Remove this props object for dynamic content
  const date = new Date();
  props = {
    project_name: "Lorem Ipsum",
    project_status: "Ongoing",
    deadline: "August 30, 2023",
    project_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ",
    collaborator: "juandelacruz@gmail.com",
  };

  return (
    <>
      {!isCancel && !isSaved && !isDelete && !isArchived ? (
        <>
          <div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[890px] md:h-[740px] xl:h-[770px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
            <div className="flex flex-col mb-4">
              <div className="flex justify-end pb-3">
                <button 
                  onClick={onDelete}>
                    <i className="fa-solid fa-trash min-[320px]:fa-xs flex justify-end pr-3 text-tertiary-a hover:text-secondary"></i>
                </button>
                <button 
                  onClick={onArchived}>
                    <i className="fa-solid fa-archive min-[320px]:fa-xs flex justify-end pr-3 text-tertiary-a hover:text-secondary"></i>
                </button>
                <button 
                  onClick={onCancel}>
                    <i className="fa-solid fa-xmark min-[320px]:fa-xs flex justify-end text-tertiary-a hover:text-secondary"></i>
                </button>
              </div>
              <div className={"border-transparent border border-solid border-b-secondary mb-4 min-[320px]:text-3xl lg:text-4xl font-bold pb-8"}>
                Edit Project
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                
                {/* Project Name */}
                <div className="col-span-1">
                  <label className="text-sm text-tertiary-b text-center">Project Name</label>
                  <input
                  name="project name"
                  className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
                  defaultValue={props.project_name}
                  />
                </div>

                {/* Project Status */}
                <div className="col-span-1">
                  <label className="text-sm text-tertiary-b block text-center mt-1">Project Status</label>
                  <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-primary text-accent-c px-4 py-2 rounded focus:outline-none w-full mt-2 p-3 md:p-4 xl:p-5"
                  >
                    {selectedOption || 'Select an option'}
                  </button>

                  {isOpen && (
                    <div className="absolute mt-2 w-48 bg-primary border border-gray-300 rounded shadow-lg">
                      {options.map((option) => (
                        <div
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
                </div>

                {/* Project Deadline */}
                <div className="col-span-1">
                  <label className="text-sm text-tertiary-b">Deadline</label>
                  <input
                  type="date"
                  name="project deadline"
                  className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
                  defaultValue={props.deadline}
                  />
                </div>
              </div>

              {/* Project Details */}
            </div>
            <label className="text-sm text-tertiary-b">Project Details</label>
            <textarea
              name="content"
              className="border-tertiary-b border border-solid shadow-inner rounded-lg text-justify my-2 h-[250px] resize-none p-3 md:p-4 xl:p-5 w-full"
              defaultValue={props.project_details}
            />
            <div className="flex flex-wrap space-y-4 md:flex-nowrap md:space-y-0 md:space-x-4 xl:space-x-5">
              <div className="flex-grow">
                <div className="flex items-center">
                  {/* Collaborators */}
                  <div className="w-full lg:w-12/12">
                    <label className="text-sm text-tertiary-b">Collaborators</label>
                    <input
                      type="search"
                      name="project collaborator"
                      className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
                      value={collaborator}
                      onChange={handleCollaboratorChange}
                    />
                  </div>

                  <button
                    onClick={handleAddCollaborator}
                    className="bg-accent px-3 py-1 rounded text-secondary-a text-md xl:font-normal min-12 mt-7 ml-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="float-right flex flex-column w-max gap-8 font-extralight text-sm mt-4">
              <button
                className="bg-accent px-5 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal"
                onClick={onSaved}
              >
                Save
              </button>
              <button
                className="text-tertiary-a font-normal [320px]:text-md lg:text-lg"
                onClick={onCancel}
              >
                Cancel
              </button>
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
