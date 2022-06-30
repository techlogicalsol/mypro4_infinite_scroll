import React from "react";

function Home({images, setImages}){

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    
                    <div className="row">
                        {images && images.map((item)=>(
                        <div className="col-md-4 mb-5 image_list" key={item.id}>
                            <img src={item.urls.regular} className="homeImg" />
                            <div className="creator">
                                <span className="creatorImg">
                                    <img src={item.user.profile_image.large} className="profile_img" alt="profile_image"/>
                                   <div> {item.user.name} </div>
                                   <div><i className="fas fa-download"></i></div>
                              
                                </span>
                            </div>
                         
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Home