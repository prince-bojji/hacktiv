import React, { useEffect, useState } from "react";
import FreedomPost from "../components/FreedomPost";

function FreedomBoard() {
	const date = new Date();
	const testData = [
		{
			id : 1,
			title: "1",
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
		},
		{
			id : 2,
			title: "2",
			content:
				"Libero enim sed faucibus turpis in eu mi bibendum. Ornare arcu odio ut sem nulla pharetra diam sit amet. Non arcu risus quis varius quam quisque id diam. Egestas congue quisque egestas diam in arcu. Ipsum dolor sit amet consectetur adipiscing elit. Nam aliquam sem et tortor consequat id porta. Donec enim diam vulputate ut pharetra sit. Commodo sed egestas egestas fringilla. Tempor orci dapibus ultrices in iaculis. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nisi porta lorem mollis aliquam ut porttitor leo. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam id. Et odio pellentesque diam volutpat commodo sed egestas egestas. ",
			author: "Juan Dela Cruz",
			date_posted:
				date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
			time_posted:
				(date.getHours() % 12) +
				":" +
				date.getMinutes() +
				(date.getHours % 12 == 0 ? "am" : "pm"),
		},
		{
			id : 3,
			title: "3",
			content:
				"Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Tellus integer feugiat scelerisque varius morbi. Tristique senectus et netus et malesuada. Donec massa sapien faucibus et molestie ac feugiat sed lectus. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Non tellus orci ac auctor augue mauris augue neque gravida. Condimentum id venenatis a condimentum vitae. Pretium aenean pharetra magna ac placerat vestibulum lectus. Lacus laoreet non curabitur gravida arcu ac. Ac tortor vitae purus faucibus ornare suspendisse. Lacus suspendisse faucibus interdum posuere lorem ipsum. Facilisis sed odio morbi quis. Eget nunc scelerisque viverra mauris in aliquam. Tincidunt arcu non sodales neque sodales ut. Eu lobortis elementum nibh tellus. Sagittis eu volutpat odio facilisis mauris sit amet.",
			author: "Juan Dela Cruz",
			date_posted:
				date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
			time_posted:
				(date.getHours() % 12) +
				":" +
				date.getMinutes() +
				(date.getHours % 12 == 0 ? "am" : "pm"),
		},
		{
			id : 4,
			title: "4",
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
		},
		{
			id : 5,
			title: "5",
			content:
				"Libero enim sed faucibus turpis in eu mi bibendum. Ornare arcu odio ut sem nulla pharetra diam sit amet. Non arcu risus quis varius quam quisque id diam. Egestas congue quisque egestas diam in arcu. Ipsum dolor sit amet consectetur adipiscing elit. Nam aliquam sem et tortor consequat id porta. Donec enim diam vulputate ut pharetra sit. Commodo sed egestas egestas fringilla. Tempor orci dapibus ultrices in iaculis. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nisi porta lorem mollis aliquam ut porttitor leo. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam id. Et odio pellentesque diam volutpat commodo sed egestas egestas. ",
			author: "Juan Dela Cruz",
			date_posted:
				date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
			time_posted:
				(date.getHours() % 12) +
				":" +
				date.getMinutes() +
				(date.getHours % 12 == 0 ? "am" : "pm"),
		},
		{
			id : 6,
			title: "6",
			content:
				"Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Tellus integer feugiat scelerisque varius morbi. Tristique senectus et netus et malesuada. Donec massa sapien faucibus et molestie ac feugiat sed lectus. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Non tellus orci ac auctor augue mauris augue neque gravida. Condimentum id venenatis a condimentum vitae. Pretium aenean pharetra magna ac placerat vestibulum lectus. Lacus laoreet non curabitur gravida arcu ac. Ac tortor vitae purus faucibus ornare suspendisse. Lacus suspendisse faucibus interdum posuere lorem ipsum. Facilisis sed odio morbi quis. Eget nunc scelerisque viverra mauris in aliquam. Tincidunt arcu non sodales neque sodales ut. Eu lobortis elementum nibh tellus. Sagittis eu volutpat odio facilisis mauris sit amet.",
			author: "Juan Dela Cruz",
			date_posted:
				date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
			time_posted:
				(date.getHours() % 12) +
				":" +
				date.getMinutes() +
				(date.getHours % 12 == 0 ? "am" : "pm"),
		},
	];

	// All components are CSR atm
	const [posts, setPosts] = useState(testData)
	const [active, setActive] = useState(0)

	const [creatingPost, createPost] = useState(false)
	const [currentSelection, setSelection] = useState(0)
	const [prevSelect, setPrev] = useState(0)

	const [newTitle, setTitle] = useState("")
	const [newContent , setContent] = useState("")

	// For when the user submits post, use newTitle and newContent
	const submitPost = () => {
		if(newTitle == "" || newContent == "") return
		const newPost = {
			id : Math.random() * 1000 + 10,
			title: newTitle,
			content: newContent,
			author: "Pedro Pendococo",
			date_posted:
			date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear(),
			time_posted:
			(date.getHours() % 12) +
			":" +
			date.getMinutes() +
			(date.getHours % 12 == 0 ? "am" : "pm"),
		}
		createPost(false)
		setSelection(prevSelect)
		setPosts([...posts, newPost])
		setTitle("")
		setContent("")
		console.log(posts)
	}
	// Delete the post
	const deletePost = (postId) => {
		const filteredPost = posts.filter((val) => val.id !== postId)
		setPosts(filteredPost)
	}
	// Filter setposts
	const showYourPost = () => {
		// setPosts(testData)
		setActive(0)
		createPost(false)
		setSelection(0)
		setPrev(0)
	}
	// Filter setposts
	const showAllPost = () => {
		// setPosts(testData)
		setActive(0)
		createPost(false)
		setSelection(2)
		setPrev(2)
	}
	// Used for setting states
	const createNewPost = () => {
		setActive(0)
		createPost(true)
		setSelection(1)
	}
	
	const cancelPost = () => {
		createPost(false)
		setSelection(prevSelect)
	}
	const titleChange = (e) => {
		setTitle(e.target.value)
	}
	const contentChange = (e) => {
		setContent(e.target.value)
	}

	return (
			
		<div className={"block bg-accent-bg-a overflow-hidden rounded-t-xl"}>
			<div className={(creatingPost ? "block" : "hidden" ) + " fixed top-0 left-0 bg-secondary-bg w-full h-full flex justify-center rounded-xl items-center"}>
				<form  onSubmit={e => e.preventDefault()} id="posting" className="bg-primary flex flex-col rounded-3xl py-8 px-6 xs:text-xs md:text-lg xl:text-2xl m-0 h-[75vh] w-[80%] lg:shadow-[0_0_6px_2px_rgba(0,0,0,0.25)] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100">
				<div className=" bg-accent font-black w-max py-2 px-5 mb-8 rounded-full text-2xl">
				<i className="p-2 first-letter:rounded-full fa-solid fa-pen"></i> Create New Post
				</div>
							<label htmlFor="title" className="mb-2 font-medium min-[320px]:text-2xl lg:text-4xl" >
								Title
							</label>
							<input
								name="title"
								type="text"
								className="with-placeholder border-tertiary-b border border-solid shadow-inner rounded-lg font-black min-[320px]:text-3xl lg:text-4xl my-4 h-max p-4"
								value={newTitle}
								onChange={titleChange}
								required={true}
								placeholder="Title"
								maxLength="25"
							/>
							<label htmlFor="content" className="mb-2 font-medium min-[320px]:text-lg lg:text-2xl">
								I will post about
							</label>
							<textarea
								name="content"
								className="with-placeholder border-tertiary-b border border-solid shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.25)] rounded-lg font-regular text-justify h-[320px] resize-none p-4"
								value={newContent}
								onChange={contentChange}
								required={true}
								placeholder="I am posting about"
								maxLength="1000"
							/>
							<div className="self-end flex flex-row w-max gap-2 text-md mt-3">
								<button form="posting" type="submit" className="bg-accent w-max px-2 py-1 rounded-md font-bold" onClick={submitPost}>Post</button>
								<button className="bg-warning w-max px-2 py-1 rounded-md font-bold " onClick={cancelPost}>Cancel</button>
							</div>
				</form>
			</div>
			<div className="lg:flex hidden flex-row align-middle gap-8 pl-8 h-max py-4 bg-secondary">
				<button className={ "bg-secondary text-primary border-2 font-bold text-lg font-doppio px-4 py-2 rounded-full min-w-max"} onClick={createNewPost}> <i className="p-2 first-letter:rounded-full fa-solid fa-pen"></i>Create Post</button>
				<button className={(currentSelection != 0 ? "bg-secondary text-primary border-2": "bg-accent ") + " font-bold text-lg font-doppio px-4 py-2 rounded-full min-w-max"} onClick={showYourPost}>  <i className="p-2 rounded-full fa-solid fa-user"></i>Your Post</button>
				<button className={(currentSelection != 2 ? "bg-secondary text-primary border-2": "bg-accent ") + " font-bold text-lg font-doppio px-4 py-2 rounded-full min-w-max"} onClick={showAllPost}>   <i className="p-2 rounded-full fa-solid fa-house"></i>All Post</button>
			</div>
			<div className="lg:hidden flex items-center ps-4 pt-6 m-0 font-doppio">
				<div className=" bg-accent font-black w-max py-2 px-5 rounded-full text-2xl">
					{
						currentSelection == 0 ? "Your Posts" :
						(
							currentSelection == 2 ? "All Posts" :
							(
								prevSelect == 0 ? "Your Posts" : "All Posts"
							)
						)
					}
				</div>
				<hr className="flex-1 h-3" />
			</div>
			{/* lg:grid-cols-2 min-[320px]:grid-cols-1 grid */}
			<div className={(posts.length == 0 ? "flex" : "hidden") + " h-[50vh] items-center justify-center ps-4 pt-6 m-0 font-doppio"}>
				<div className=" bg-accent font-black w-max py-2 px-5 rounded-full text-2xl">
					No Posts
				</div>
			</div>
			<div className={(posts.length == 0 ? "hidden" : "flex") + " lg:p-10 py-5 justify-center items-start content-center flex-wrap md:flex-row min-[320px]:flex-col gap-y-8 font-inter h-max w-full"}>
				<div className="gap-y-8 flex flex-wrap flex-col lg:w-[50%] lg:pe-6 lg:border-e-[1px] border-secondary-a min-[320px]:w-[96%] justify-center content-center">
					{posts.filter((val, index) => index % 2 == 0).map((val, index) => (
						<FreedomPost post={val} select={[active, setActive]} delete={deletePost} key={index + val.id + val.date_posted + val.time_posted} />
					))}
				</div>
				<div className="gap-y-8 flex flex-wrap flex-col lg:w-[50%] lg:ps-6 min-[320px]:w-[96%] justify-center content-center ">
					{posts.filter((val, index) => index % 2 != 0).map((val, index) => (
						<FreedomPost post={val} select={[active, setActive]} delete={deletePost} key={index + val.id + val.date_posted + val.time_posted} />
					))}
				</div>
			</div>
			<div className="lg:hidden flex flex-row align-middle justify-between px-32 fixed bottom-0 left-0 w-screen h-[48px] bg-secondary">
				<button className={(currentSelection == 0 ? "bg-accent ": "") + "aspect-square "} onClick={showYourPost}> <i className="p-2 bg-accent rounded-full fa-solid fa-user"></i></button>
				<button className={(currentSelection == 1 ? "bg-accent ": "") + "aspect-square "} onClick={createNewPost}><i className="p-2 bg-accent rounded-full fa-solid fa-pen"></i></button>
				<button className={(currentSelection == 2 ? "bg-accent ": "") + "aspect-square "} onClick={showAllPost}>  <i className="p-2 bg-accent rounded-full fa-solid fa-house"></i></button>
			</div>
		</div>
	);
}

export default FreedomBoard;
