import { Children } from "react";


export default function Container({children}){
    return(
        <div className="md:container p-2 shadow-sm rounded border-2">
            {Children.map(children, child => child)}
        </div>
    )
}