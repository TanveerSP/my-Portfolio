import React from 'react'

const CVButton = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/TanveerResume.pdf'; // Assuming the resume is in the public directory
        link.download = 'MyResume.pdf'; // This sets the filename for the downloaded file
        link.click();
    };

    return (
        <div>
            <button
                onClick={handleDownload}
                className="z-[1] rounded-2xl text-white font-semibold py-3 px-6 border-[0.1px] border-white transition-transform transform hover:scale-95 focus:outline-none">
                Download CV
            </button>
        </div>
    )
}

export default CVButton