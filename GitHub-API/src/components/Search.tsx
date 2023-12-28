import {BsSearch} from "react-icons/bs"

const Search = () => {
  return (
    <div>
        <h2>Busque por um usúario:</h2>
        <p>Conheça os melhores repositórios</p>
        <input type="text" placeholder='Digite o nome do usúario' />
        <button><BsSearch/></button>

    </div>
  )
}

export default Search