import React, { useRef, useState } from "react";
import CreateProject from "./CreateProject";

function ProjectEnlisting(props) {
	const [isCreating, setIsCreating] = useState(false);

	// When the create new project button is clicked
	const onCreating = () => {
		setIsCreating(true);
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
		{!isCreating ? (
			<>
			<button 
			className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right"
			onClick={onCreating}>Create New Project
		</button>
		<div className={"bg-primary border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a min-[320px]:text-md lg:text-md font-bold pb-4 mt-16 shadow-[0_0_1px_1px_rgba(0,0,0,0.25)]"}>
			Search Project
		</div>
		<div className={"bg-primary border rounded-b xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] min-[320px]:h-[43px] md:h-[47px] xl:h-[48px] shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
			<div class="grid-cols-2">
				<input type="search"
                    name="project collaborator"
                    className="border-transparent border-tertiary-b border border-solid shadow-inner text-md h-max p-2 md:p-2 xl:p-2 w-[68%] md:w-[80%] xl:w-[90%] pl-2"
                    placeholder="Find by name"
                />
				<button 
					className="bg-accent px-7 py-1 rounded text-secondary-a text-md xl:font-normal ml-2">Find
				</button>
			</div>
		</div>
		<div className={"bg-accent rounded-t p-4 border-transparent border border-secondary border-solid border-b-tertiary-a min-[320px]:text-md lg:text-md font-bold pb-4 mt-7 shadow-[0_0_1px_1px_rgba(0,0,0,0.25)]"}>
			Project
		</div>
		<div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
		<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="border-b text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Project name
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Deadline
                </th>
                <th scope="col" class="px-6 py-3">
                    Dropdown
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    test
                </th>
                <td class="px-6 py-4">
                    Ongoing
                </td>
                <td class="px-6 py-4">
                    August 31, 2023
                </td>
                <td class="px-6 py-4">
                    ^
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    test1
                </th>
                <td class="px-6 py-4">
                    Ongoing
                </td>
                <td class="px-6 py-4">
                    August 31, 2023
                </td>
                <td class="px-6 py-4">
                    ^
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    test2
                </th>
                <td class="px-6 py-4">
                    Completed
                </td>
                <td class="px-6 py-4">
                    August 31, 2023
                </td>
                <td class="px-6 py-4">
                    ^
                </td>
            </tr>
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    test3
                </th>
                <td class="px-6 py-4">
                    Completed
                </td>
                <td class="px-6 py-4">
                    September 10, 2023
                </td>
                <td class="px-6 py-4">
                    ^
                </td>
            </tr>
			<tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    test4
                </th>
                <td class="px-6 py-4">
                    Ongoing
                </td>
                <td class="px-6 py-4">
                    September 10, 2023
                </td>
                <td class="px-6 py-4">
                    ^
                </td>
				</tr>
		</tbody>
	</table>
	</div>
	</div>
	</>): (
		<>
		<div className="justify-center items-center h-max"></div>
		<CreateProject />
		</>
	)};
	</>
)}

export default ProjectEnlisting;
