import React, { useState } from "react";

function FreedomPost(props) {
	// Remove this post object for dynamic content
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isAuthor, setIsAuthor] = useState(true);
	const [isActive, setActive] = props.select

	const [post, setPost] = useState(props.post)
	const [postTitle, setTitle] = useState(post.title)
	const [postContent, setContent] = useState(post.content)

	// When save edit button is clicked
	const onSave = () => {
		if(postTitle == "" || postContent == "") return
		setPost({...post, title: postTitle, content: postContent})
		// post now contain all the changes, may be used for CRUD, render is only client side not server side, unless Freedomboard will be
		// re-rendered for each save

		setIsEditing(false)
	};

	// These functions are for handling state changes
	const titleChange = (e) => {
		setTitle(e.target.value)
	}

	const contentChange = (e) => {
		setContent(e.target.value)
	}

	const onDeleting = () => {
		setActive(post.id)
		setIsDeleting(true);
	};

	const onEdit = () => {
		setActive(post.id)
		setIsEditing(true);
	};

	const onCancel = () => {
		setIsDeleting(false);
		setIsEditing(false);
	};

	const isSelected = () => {
		if(post.id == isActive)
			return true
		onCancel()
	}

	return (
			<div
			onFocus={() => {setActive(post.id)}}
				className={
					(((isEditing || isDeleting)  && isSelected())
						? "outline outline-offset-2 outline-secondary-a "
						: "outline-none ") +
						// min-[320px]:w-[92%] md:w-[56%] xl:w-[32%]
					"bg-primary w-full min-w-full max-w-full flex flex-col rounded py-3 px-6 xs:text-xs md:text-lg xl:text-2xl m-0 h-max lg:shadow-[0_0_6px_2px_rgba(0,0,0,0.25)] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"
				}
			>
				<div className="grid grid-cols-3 items-center mb-5">
					<div className="flex items-center col-span-2">
						{/* replace this span for actual image */}
						<span className="bg-tertiary-c rounded-full min-[320px]:w-14 md:w-12 lg:w-16 aspect-square mr-2" />
						<span className="font-semibold">{post.author}</span>
					</div>
					{/* If author is the same as the user, show these buttons */}
					{isAuthor ? (
						<>
							<div className="flex justify-self-end gap-4 items-center">
								<button
									form={isEditing ? "editing" : ""}
									type={isEditing ? "submit" : "button"}
									className={
										(isEditing
											? "bg-accent w-max px-2 py-1 rounded-md font-bold "
											: isDeleting
											? "bg-warning w-max px-2 py-1 rounded-md font-bold "
											: "bg-accent min-[320px]:h-8 h-10 rounded-full aspect-square ") +
										"ease-in duration-75 flex items-center justify-center"
									}
									onClick={isEditing ? onSave : isDeleting ? ((e) => props.delete(post.id)) : onEdit}
								>
									{isEditing ? (
										"Save"
									) : isDeleting ? (
										"Confirm"
									) : (
										<i className="fa-solid fa-pen-to-square min-[320px]:fa-2xs fa-xs "></i>
									)}
								
								</button>
								<button
									className={
										(isDeleting ? "bg-accent" : "bg-warning") +
										" min-[320px]:h-8 h-10 rounded-full aspect-square ease-in duration-75 flex items-center justify-center"
									}
									onClick={
										isEditing ? onCancel : isDeleting ? onCancel : onDeleting
									}
								>
									{isEditing ? (
										<i
											className="fa-solid fa-xmark min-[320px]:fa-2xs fa-xs "
											style={{ color: "#ffffff" }}
										></i>
									) : isDeleting ? (
										<i
											className="fa-solid fa-xmark min-[320px]:fa-2xs fa-xs"
											style={{ color: "#ffffff" }}
										></i>
									) : (
										<i className="fa-solid fa-trash min-[320px]:fa-2xs fa-xs "></i>
									)}
								</button>
							</div>
						</>
					) : (
						<></>
					)}
					
				</div>
				<div className="flex flex-col mb-4">
					{isEditing ? (
						<form id="editing" onSubmit={e => e.preventDefault()} className="flex flex-col mb-4">
							<input
								name="title"
								type="text"
								className="border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-3xl lg:text-4xl my-4 h-max p-2"
								value={postTitle}
								onChange={titleChange}
								required={true}
								maxLength="25"
							/>
							<textarea
								name="content"
								className="border-tertiary-b border border-solid shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.25)] rounded-lg font-regular text-justify h-[320px] resize-none p-2"
								value={postContent}
								onChange={contentChange}
								required={true}
								maxLength="1000"
							/>
						</form>
					) : (
						<>
							<span className="font-black min-[320px]:text-3xl lg:text-4xl my-4">
								{post.title}
							</span>
							<span className="font-normal text-justify break-words ">{post.content}</span>
						</>
					)}
				</div>
				<div className="self-end flex flex-row w-max gap-8 font-light text-md mt-3">
					<span className="text-secondary">{post.date_posted}</span>
					<span className="text-secondary">{post.time_posted}</span>
				</div>
			</div>
	);
}

export default FreedomPost;
{/* {isAuthor ? (
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
									<button className="bg-accent w-max p-2 rounded-md font-bold">
										Save
									</button>
									<button
										className="bg-warning min-[320px]:w-8 lg:w-12 rounded-full aspect-square"
										onClick={onCancel}
									>
										<i
											className="fa-solid fa-xmark min-[320px]:fa-xs"
											style={{ color: "#ffffff" }}
										></i>
									</button>
								</>
							) : (
								<>
									<button className="bg-warning w-max p-2 rounded-md font-bold">
										Confirm
									</button>
									<button
										className="bg-accent min-[320px]:w-8 lg:w-12 rounded-full aspect-square"
										onClick={onCancel}
									>
										<i className="fa-solid fa-xmark min-[320px]:fa-xs"></i>
									</button>
								</>
							)}
						</div>
					) : (
						<></>
					)} */}