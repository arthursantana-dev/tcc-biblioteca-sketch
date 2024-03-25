import { Children } from "react";


export default function Container({children}){
    return(
        <div className="container p-5 m-3 shadow-sm rounded-lg border-2 flex flex-col align-center w-fit h-fit">
            {Children.map(children, child => child)}
        </div>
    )
}