import React from 'react'
import FreedomPost from '../components/FreedomPost'

function FreedomBoard() {
  const date = new Date();
  const testData = [{
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
	},{
		title: "Timmy Dayo",
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
	},{
		title: "Mumbai World",
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
	}]
  return (
    <>
      <div className="font-inter flex justify-center items-start h-max gap-4">
        {testData.map((val) => 
          <FreedomPost props={val} key={val.date_posted+val.time_posted+testData.indexOf(val)}/>
        )}
      </div>
    </>
  )
}

export default FreedomBoard