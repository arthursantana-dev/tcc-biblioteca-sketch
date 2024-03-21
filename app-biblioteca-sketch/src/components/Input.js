export default function Input(props){
    const {placeholder, setValue} = {...props}

    function handleChange(val){
        setValue(val)
    }

    return(
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mx-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text" value={placeholder} onChange={(e)=>handleChange(e.target.value)}></input>
    )
}