import React, { useRef, useState } from "react";
import ProjectEnlist from './ProjectEnlist'
import {
    FaUserPlus,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CreateProject(props) {
	const [isCancel, setIsCancel] = useState(false);
	const [isCreate, setIsCreate] = useState(false);
	const [collaborator, setCollaborator] = useState('');

	// When the create new project button is clicked
	const onCancel = () => {
		setIsCancel(true);
	};

	const onCreate = () => {
		setIsCreate(true);
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
		collaborator: "juandelacruz@gmail.com",
		date_posted:
			date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
		time_posted:
			(date.getHours() % 12) +
			":" +
			date.getMinutes() +
			(date.getHours % 12 == 0 ? "am" : "pm"),
		project_details:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ",
		};
	return (
		<>
		{!isCancel && !isCreate ? (
			<>
			<div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[800px] md:h-[610px] xl:h-[620px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
				<div className="flex flex-col mb-4">
				<button 
                    onClick={onCancel}>
						<i className="fa-solid fa-xmark min-[320px]:fa-xs flex justify-end"></i>
					</button>
					<div className={"border-transparent border border-solid border-b-secondary mb-4 min-[320px]:text-3xl lg:text-4xl font-bold pb-8"}>
						Create New Project
					</div>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 xl:space-x-5">
					{/* Project Name */}
					<div className="flex-grow">
						<label className="text-sm text-tertiary-b block">Project Name</label>
						<input
						name="project name"
						className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
						defaultValue={props.project_name}
						/>
					</div>
					
					{/* Collaborators Search Bar */}
					<div className="flex-grow">
						<label className="text-sm text-tertiary-b block">Collaborators</label>
						<div className="flex">
						<input
							type="search"
							name="project collaborator"
							className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
							value={collaborator}
							onChange={handleCollaboratorChange}
						/>
						<button
							onClick={handleAddCollaborator}
							className="bg-accent px-7 py-1 rounded text-secondary-a text-md xl:font-normal ml-2 mt-2 mb-2"
						>
							Add
						</button>
						</div>
					</div>

					{/* Project Deadline */}
					<div className="flex-grow">
						<label className="text-sm text-tertiary-b block"> Deadline</label>
						<input
						type="date"
						name="project deadline"
						className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full"
						defaultValue={props.deadline}
						/>
					</div>
					</div>
					<label className="text-sm text-tertiary-b mt-2">Project Details</label>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 xl:space-x-5">
					<textarea
						name="content"
						className="border-tertiary-b border border-solid shadow-inner rounded-lg text-justify my-2 h-[250px] resize-none p-3 md:p-4 xl:p-5 w-full"
						defaultValue={props.project_details}
					/>		
				</div>
				</div>
				<div className="float-right flex flex-column w-max gap-8 font-extralight text-sm mt-1">
						<button className=" bg-accent px-5 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal"
							onClick={onCreate}>Create
						</button>
						<button className=" text-tertiary-a font-normal [320px]:text-md lg:text-lg "
							onClick={onCancel}>Cancel
						</button>
				</div>
				</div>

			</>): (
		<>
		<ProjectEnlist />
		</>
	)};
	</>
	);
}

export default CreateProject;
