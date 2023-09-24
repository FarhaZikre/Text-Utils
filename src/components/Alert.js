import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> // capital 'S'= Success
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // this is not preferable but here used=->if props.alert value is not null then only show next block 
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> This was cross for cut the alert */}
            {/* But here we are building a alert which cut after 3 seconds automatically */}
        </div>
    )
}
