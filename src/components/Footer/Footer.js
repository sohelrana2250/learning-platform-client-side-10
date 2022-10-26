import React from 'react';

const Footer = () => {
    return (

        <footer className=" h-none bg-dark rounded mt-5 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="text-white">Kahoot-Eduction-Zone</h1>
                <p className="text-white">Office 41, Zawaya Buildin, Ghala Muscat,</p>
                <p className="text-white">Sultanate of Oman</p>
                <p className="text-white">Privacy Ploicy | Terms of use</p>
                <span>
                    <i className="fa-brands fa-facebook fs-1 text-primary p-2"></i>
                    <i className="fa-brands fa-square-twitter fs-1 text-info p-2"></i>
                    <i className="fa-brands fa-linkedin fs-1 text-primary p-2"></i>
                    <i className="fa-brands fa-tiktok fs-1 text-danger p-2"></i>
                </span>

            </div>



        </footer>


    );
};

export default Footer;