import React, { useRef, useState } from "react"
import ProjectEnlist from './ProjectEnlist'

function ViewProject(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCancel, setIsCancel] = useState(false);
	const [isSave, setIsSave] = useState(false);
	const [collaborator, setCollaborator] = useState('');

	// When the create new project button is clicked
	const onCancel = () => {
		setIsCancel(true);
	};

	const onSave = () => {
		setIsSave(true);
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
		{!isCancel && !isSave ? (
			<>
			<div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[820px] md:h-[675px] xl:h-[690px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
				<div className="flex flex-col mb-4">
				<button 
                    onClick={onCancel}>
						<i className="fa-solid fa-xmark min-[320px]:fa-xs flex justify-end"></i>
					</button>
					<div className={"border-transparent border border-solid border-b-secondary mb-4 min-[320px]:text-3xl lg:text-4xl font-bold pb-8"}>
						Project
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{/* Project Name */}
				<div className="col-span-1">
					<label className="text-sm text-tertiary-b text-center">Project Name</label>
					<input
					name="project name"
					className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full" disabled
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
						disabled
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
					className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full" disabled
					defaultValue={props.deadline}
					/>
				</div>
				</div>

					{/* Project Details */}
					</div>
					<label className="text-sm text-tertiary-b">Project Details</label>
					<textarea
						name="content"
						className="border-tertiary-b border border-solid shadow-inner rounded-lg text-justify my-2 h-[250px] resize-none p-3 md:p-4 xl:p-5 w-full" disabled
						defaultValue={props.project_details} 
					/>
				<div className="flex">
				{/* Collaborators */}
				<div className="flex-grow">
					<label className="text-sm text-tertiary-b">Collaborators</label>
					<input
					type="search"
					name="project collaborator"
					className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-full" disabled
					value={collaborator}
					onChange={handleCollaboratorChange}
					/>
				</div>
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

export default ViewProject;
