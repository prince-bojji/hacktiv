import React, { useRef, useState } from "react";
import {
    FaUserPlus,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CreateProject(props) {
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
			<div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[92%] md:w-[56%] xl:w-[85%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
				<div className="flex flex-col mb-4">
					<div className={"border-transparent border border-solid border-b-secondary mt-4 mb-4 min-[320px]:text-3xl lg:text-4xl font-bold pb-8"}>
						Create New Project
					</div>
					<div class="grid-cols-3 min-[320px]:space-x-0 md: space-x-3 xl:space-x-5">
						<input
                            name="project name"
                            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-[98%] md:w-[56%] xl:w-[45%]"
                            defaultValue={props.project_name}
                        />
						<input type="search"
                            name="project collaborator"
                            className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-[98%] md:w-[56%] xl:w-[25%]"
                            defaultValue={props.collaborator}
                        />
						<input type="date"
                            name="project deadline"
							className="border-tertiary-b border border-solid shadow-inner rounded-lg min-[320px]:text-md lg:text-xl my-2 h-max p-3 md:p-4 xl:p-5 w-[98%] md:w-[56%] xl:w-[25%]"
							defaultValue={props.date_posted}
                        />
							</div>
							<textarea
							name="content"
							className="border-tertiary-b border border-solid shadow-inner rounded-lg text-justify my-2 h-[250px] resize-none p-3 md:p-4 xl:p-5"
							defaultValue={props.project_details}
						/>
				</div>
				<div className="float-right flex flex-row w-max gap-8 font-extralight text-sm mt-1">
					<button className="text-tertiary-a font-normal [320px]:text-md lg:text-lg ">Cancel</button>
					<button className="bg-accent px-5 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal">Create</button>
				</div>
			</div>
		</>
	);
}

export default CreateProject;
