


function Item ({stydents}) {
    return (
        <li >
          <h3>{stydents.name}</h3>
          <p>{stydents.age}</p>
          <p>{stydents.city}</p>
          <p>{stydents.email}</p>
          <p>{stydents.isOnline ? "online" : "ofline"}</p>
          <p>{stydents.salary}</p>
          </li>
    )
}

export default Item