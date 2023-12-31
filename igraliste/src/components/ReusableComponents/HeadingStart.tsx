import React from 'react'
import "./HeadingStart.css";


interface Heading {
    text: string;
}

const HeadingStart = ({ text }: Heading) => {
    return (
        <div className='heading'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <path d="M15.4043 14.3438L24.9609 13.3892L15.4043 12.4333L21.4864 4.99989L14.0526 11.0824L13.0972 1.52539L12.1413 11.0824L4.7079 4.99989L10.7901 12.4333L1.2334 13.3892L10.7901 14.3438L4.7079 21.778L12.1413 15.6963L13.0972 25.2529L14.0526 15.6963L21.4864 21.778L15.4043 14.3438Z" fill="#232221" />
            </svg>

            <div className="text">{text}</div>
        </div>

    )
}

export default HeadingStart
