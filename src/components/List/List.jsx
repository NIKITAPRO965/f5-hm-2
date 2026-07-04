import Item from "../Item/Item"

function List({data}) {
  return  <ul>
          {data.map(
            ({ id, name, age, city, email, isActive, salary }) => {
              return (
               <Item key={id} name={name} age={age} city={city} email={email} isActive={isActive} salary={salary}/>
              );
            },
          )}
        </ul>
}

export default List

