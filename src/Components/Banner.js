import React from "react";

function Banner({searchTerm, setSearchTerm, setImages, handleOnSubmit}){



    return(
        <>
            <div className="banner">
            <img src="/img/bg.jpg" className="myImg" alt="banners"/>
                <div className="text-block">
                    <h1 className="display-1">
                        <strong>Unsplash</strong>
                    </h1>
                    <p>The internet source of freely-usage images.</p>
                    <div className="input">
                    <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text"
                        placeholder="Search free high-resolution photos"
                        // value={searchTerm}
                        // onChange={handleOnChange}
                        />
                    </form>
                    </div>

                
                </div>
            </div>

        </>
    )
}

export default Banner