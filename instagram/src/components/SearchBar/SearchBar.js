import React from 'react'
import "../../App.css"
/* import PropTypes from 'prop-types'; */
import Search from './Search';


const SearchBar = props => {

	/* const arr = props.char */



	const arrHandler = (e) => {

		/* console.log("arr: " + arr); */
	}

	const logOutHandler = (e) => {
		localStorage.setItem('user', "");
	}
	const clickHandler = (e) => {
		console.log("clickHandler")
	}
	/* const submitHandler = () => {
		alert("wait")
	} */

	return (

		<div className='searchBarContainer'>

			<header className="searchHeader">
				<div className="searchSubContainer">
					<div className='button' id="camera" onClick={props.camera}></div>
					<div className='button' id='titleText'>Instagram</div></div>
				
					<Search  char={props.char}> </Search>
								
				<div className='iconContainer'>
					<div className='button' value={props.username} id='icon1' onClick={arrHandler}></div>
					<div className='button' id='icon2' onClick={clickHandler}></div>
					<div className='button' id='icon3' onClick={logOutHandler}></div>
				</div>
			</header>
		</div>


	);
};

export default SearchBar;
