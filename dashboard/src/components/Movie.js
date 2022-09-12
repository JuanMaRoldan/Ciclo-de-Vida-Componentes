import React from 'react';


const MovieList=({id,title,awards,length,rating})=>{
    return(
		<tr>
		<td>{id}</td>
        <td>{title}</td>
		<td>{length}</td>
		<td>{rating}</td>
		<td>{awards}</td>
	</tr>
    )
}
export default MovieList;