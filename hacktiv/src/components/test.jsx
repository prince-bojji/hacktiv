import Header from '/src/components/Header';
import NavBar from './NavBar';
import React, { useState } from 'react';

import {
    FaCalendar,
    FaUserPlus,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CreateProject(props) {

	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isAuthor, setIsAuthor] = useState(true);

  // When the delete button is clicked
	const onDeleting = () => {
		setIsDeleting(true);
	};
  // When edit button is clicked
	const onEdit = () => {
		setIsEditing(true);
	};
  // When save on edit is clicked
  const onSave = () => {

  }
  // When confirm delete button is clicked
  const onDelete = () => {

  }
  // When edit or delete is cancelled
	const onCancel = () => {
		setIsDeleting(false);
		setIsEditing(false);
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
			<div className={"bg-primary rounded p-5 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[92%] md:w-[56%] xl:w-[85%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
				
				<div className="flex flex-col mb-4">
					{isEditing ? (
						<>
						<div class="grid-cols-3 min-[320px]:space-x-0 md: space-x-3 xl:space-x-5">
						<input
                            name="project name"
            readOnly={isEditing}
                            className="border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-lg lg:text-xl my-2 h-max p-2 w-[98%] md:w-[56%] xl:w-[45%]"
                            defaultValue={props.project_name}
                        />
						<input
                            name="project name"
            readOnly={isEditing}
                            className="border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-lg lg:text-xl my-2 h-max p-2 w-[98%] md:w-[56%] xl:w-[25%]"
                            defaultValue={props.project_name}
                        />
						<input
                            name="project name"
            readOnly={isEditing}
							className="border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-lg lg:text-xl my-2 h-max p-2 w-[98%] md:w-[56%] xl:w-[25%]"
							defaultValue={props.project_name}
                        />
							</div>
							<textarea
								name="content"
                readOnly={isEditing}
								className="border-tertiary-b border border-solid shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.25)] rounded-lg text-justify my-2 h-[420px] resize-none p-2"
								defaultValue={props.content}
							/>
						</>
					) : (
						<>
							<span className="font-black min-[320px]:text-3xl lg:text-4xl my-4">
								{props.title}
							</span>
							<span className="text-justify">{props.content}</span>
						</>
					)}
				</div>
				<div className="float-right flex flex-row w-max gap-8 font-extralight text-sm mt-2">
					<span className="text-tertiary-a">{props.date_posted}</span>
					<span className="text-tertiary-a">{props.time_posted}</span>
				</div>
			</div>
		</>
	);
}

export default CreateProject;
