import React, { useState, useRef, useEffect } from 'react'
import CreateProject from "./CreateProject"
import ViewProject from './ViewProject'
import EditProject from './EditProject'

const projectData = [
    {
      project_name: "test",
      project_status: "Ongoing",
      deadline: "August 31, 2023",
      project_details: "lorem",
      collaborators: "juandelacruz@gmail.com",
    },
    {
        project_name: "test",
        project_status: "Ongoing",
        deadline: "August 31, 2023",
        project_details: "lorem",
        collaborators: "juandelacruz@gmail.com",
      },
      {
        project_name: "test1",
        project_status: "Ongoing",
        deadline: "August 31, 2023",
        project_details: "lorem",
        collaborators: "juandelacruz@gmail.com",
      },
      {
        project_name: "test2",
        project_status: "Completed",
        deadline: "August 31, 2023",
        project_details: "lorem",
        collaborators: "juandelacruz@gmail.com",
      },
      {
        project_name: "test3",
        project_status: "Completed",
        deadline: "September 10, 2023",
        project_details: "lorem",
        collaborators: "juandelacruz@gmail.com",
      },
      {
        project_name: "test4",
        project_status: "Completed",
        deadline: "September 10, 2023",
        project_details: "lorem",
        collaborators: "juandelacruz@gmail.com",
      },
    // Add more project objects here as needed
  ];

function ProjectEnlisting(props) {
	const [isCreating, setIsCreating] = useState(false);
  const [isView, setIsViewing] = useState(false);
  const [isEdit, setIsEditing] = useState(false);
  const [isDelete, setIsDeleting] = useState(false);
  const [isArchive, setIsArchiving] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

	// When the create new project button is clicked
	const onCreating = () => {
		setIsCreating(true);
	};

  const onView = () => {
		setIsViewing(true);
	};

  const onEdit = () => {
		setIsEditing(true);
	};

  const onDelete = () => {
		setIsDeleting(true);
	};

  const onArchive = () => {
		setIsArchiving(true);
	};

    // Function to handle clicking outside the dropdown
    const handleClickOutside = (event) => {
        if (openDropdownIndex !== null) {
          if (
            dropdownRefs.current[openDropdownIndex] &&
            !dropdownRefs.current[openDropdownIndex].contains(event.target)
          ) {
            setOpenDropdownIndex(null);
          }
        }
      };

  // Add a click event listener to the document to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdownIndex]);

  // Function to toggle the dropdown
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

	return (
		<>
		{!isCreating && !isView && !isEdit ? (
			<>
			<button 
			className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right"
			onClick={onCreating}>Create New Project
		</button>
		<div className={"bg-primary border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a min-[320px]:text-md lg:text-md font-bold pb-4 mt-16 shadow-[0_0_1px_1px_rgba(0,0,0,0.25)]"}>
			Search Project
		</div>
		<div className={"bg-primary border rounded-b xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[43px] md:h-[47px] xl:h-[48px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
  <div className="flex items-center">
    <input
      type="search"
      name="project collaborator"
      className="border-transparent border-tertiary-b border border-solid shadow-inner text-md h-max p-2 md:p-2 xl:p-2 w-[68%] md:w-[80%] xl:w-[90%] pl-2"
      placeholder="Find by name"
    />
    <button
      className="bg-accent px-7 py-1 rounded text-secondary-a text-md xl:font-normal ml-2 mr-2"
    >
      Find
    </button>
  </div>
</div>

		<div className={"bg-accent rounded-t p-4 border border-secondary border-solid border-b-tertiary-a min-[320px]:text-md lg:text-md font-bold pb-4 mt-7 shadow-[0_0_1px_1px_rgba(0,0,0,0.25)]"}>
			Project
		</div>
		<div className={"bg-primary border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
        <div class="relative">
		{/* <div class="overflow-x-auto overflow-y-hidden"> */}
    <table className="w-full text-sm text-left text-tertiary-a">
  <thead className="border-b text-xs text-secondary uppercase bg-primary">
    <tr>
      <th scope="col" className="px-6 py-3">
        Project name
      </th>
      {/* Hide the "Status" and "Deadline" columns on small screens */}
      <th
        scope="col"
        className="hidden md:table-cell px-6 py-3"
      >
        Status
      </th>
      <th
        scope="col"
        className="hidden md:table-cell px-6 py-3"
      >
        Deadline
      </th>
    </tr>
  </thead>
  <tbody>
    {projectData.map((project, index) => (
      <tr
        key={index}
        className="bg-primary border-t "
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-secondary whitespace-nowrap"
        >
          {project.project_name}
        </th>
        
        {/* Hide the "Status" and "Deadline" columns on small screens */}
        <td className="hidden md:table-cell px-6 py-4">
          {project.project_status}
        </td>
        <td className="hidden md:table-cell px-6 py-4">
          {project.deadline}
        </td>
        <td className="px-6 py-4">
          <div className="relative inline-block text-left float-right">
            <div>
              <button
                id="menu-button"
                className="bg-primary flex items-center space-x-1 p-2 text-tertiary-a hover:text-secondary  focus:outline-none"
                onClick={() => toggleDropdown(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M12 8a2 2 0 11-4 0 2 2 0 014 0zm0 4a2 2 0 11-4 0 2 2 0 014 0zm0 4a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
            {openDropdownIndex === index && (
              <div
                ref={dropdownRef}
                id="menu"
                className="absolute top-0 right-0 mt-10 w-30 py-2 bg-primary border border-tertiary-b rounded shadow-lg z-50"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-tertiary-a hover:bg-accent-b hover:text-secondary"
                  onClick={onView}
                >
                  View
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-tertiary-a hover:bg-accent-b hover:text-secondary"
                  onClick={onEdit}
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-tertiary-a hover:bg-accent-b hover:text-secondary"
                  onClick={onDelete}
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-tertiary-a hover:bg-accent-b hover:text-secondary"
                  onClick={onArchive}
                >
                  Archive
                </a>
              </div>
            )}
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

	</div>
    </div>
	{/* </div> */}
	</>): isCreating ? (
		<>
		<div className="justify-center items-center h-max"></div>
		<CreateProject />
		</>
	): isEdit ? (
  <>
    <div className="justify-center items-center h-max"></div>
		<EditProject />
  </>): isView ? (
    <>
    <div className="justify-center items-center h-max"></div>
		<ViewProject />
    </>
  ) : (
    <>
    </>
  )
  };
	</>
)}

export default ProjectEnlisting;