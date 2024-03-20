export default function Button(props){
    const {title, onClick} = {...props}

    return(
        <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
            {title}
        </button>
    )
}