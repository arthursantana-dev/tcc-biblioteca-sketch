import { Children } from "react";


export default function Container({children}){
    return(
        <div className="md:container p-2 shadow-sm rounded border-2 flex flex-col align-center w-fit">
            {Children.map(children, child => child)}
        </div>
    )
}