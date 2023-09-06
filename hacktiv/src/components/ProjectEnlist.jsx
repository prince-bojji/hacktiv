import React, { useRef, useState } from "react";

function ProjectEnlisting(props) {
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
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ",
		author: "Juan Dela Cruz",
		date_posted:
			date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
		time_posted:
			(date.getHours() % 12) +
			":" +
			date.getMinutes() +
			(date.getHours % 12 == 0 ? "am" : "pm"),
	};
	return (
		<>
			<div className={(isEditing ? "outline outline-offset-2 outline-secondary-a " : "outline-none ") + "bg-primary rounded p-8 xs:text-xs md:text-lg xl:text-2xl min-[320px]:w-[92%] md:w-[56%] xl:w-[32%] h-max shadow-[0_0_6px_2px_rgba(0,0,0,0.25)] ease-in duration-100"}>
				<div className="grid grid-cols-3 items-center mb-5">
					<div className="flex items-center col-span-2">
						{/* replace this span for actual image */}
						<span className="bg-tertiary-b rounded-full min-[320px]:w-16 md:w-14 lg:w-20 aspect-square mr-2" />
						<span className="font-semibold">{props.author}</span>
					</div>
					{/* If author is the same is the user, show these buttons */}
					{isAuthor ? (
						<div className="flex justify-self-end gap-4">
							{!isEditing && !isDeleting ? (
								<>
									<button
										className="bg-accent min-[320px]:w-8 lg:w-10 rounded-full aspect-square"
										onClick={onEdit}
									>
										<i className="fa-solid fa-pen-to-square"></i>
									</button>
									<button
										className="bg-warning min-[320px]:w-8 lg:w-10 rounded-full aspect-square"
										onClick={onDeleting}
									>
										<i className="fa-solid fa-trash min-[320px]:fa-xs"></i>
									</button>
								</>
							) : isEditing ? (
								<>
									<button
                    className="bg-accent w-max p-2 rounded-md font-bold">Save</button>
									<button 
                    className="bg-warning min-[320px]:w-8 lg:w-12 rounded-full aspect-square"
                    onClick={onCancel}>
										<i className="fa-solid fa-xmark min-[320px]:fa-xs" style={{color: '#ffffff'}}></i>
									</button>
								</>
							) : (
								<>
									<button className="bg-warning w-max p-2 rounded-md font-bold">Confirm</button>
									<button 
                    className="bg-accent min-[320px]:w-8 lg:w-12 rounded-full aspect-square"
                    onClick={onCancel}>
										<i className="fa-solid fa-xmark min-[320px]:fa-xs"></i>
									</button>
								</>
							)}
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="flex flex-col mb-4">
					{isEditing ? (
						<>
							<input
								name="title"
                readOnly={isEditing}
								className="border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-3xl lg:text-4xl my-4 h-max p-2"
								defaultValue={props.title}
							/>
							<textarea
								name="content"
                readOnly={isEditing}
								className="border-tertiary-b border border-solid shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.25)] rounded-lg text-justify h-[420px] resize-none p-2"
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

export default ProjectEnlisting;
