import React from 'react';
import socialLinks from '../../data/social';

const SocialBar = () => {
    return (
        <div className="flex items-center justify-center  z-20">
            <ul className="flex items-center gap-4 text-white">
                {socialLinks.map(({ id, href, child }) => (
                    <li key={id}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialBar;
