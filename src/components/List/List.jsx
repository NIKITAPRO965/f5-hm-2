import Item from "../Item/Item"

function List ({data}) {
    return (
        <ul>{data.map((stydents) => {
        return (
          <Item key={stydents.id} stydents={stydents}/>
        )
      })}</ul>
    )
}

export default List

