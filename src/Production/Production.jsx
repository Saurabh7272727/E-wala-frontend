import React from 'react'
import './Production.scss';
const Production = ({ datas, loadings }) => {
    return (
        <>
            <div className="production_side_section_main">
                {
                    loadings ? <div className='loading_side_production'><h2>Loading.....</h2></div> : <div className='main_content_production_page'>
                        <img src="https://img.freepik.com/free-vector/animator-working-character-movement-designing-frames-walking_335657-2461.jpg?w=1380&t=st=1698165500~exp=1698166100~hmac=c07c255b68d9e2e5c8e5e096f8376aa2f3b869f73bcf58ca6b28b9b5e862b27f" alt="" />
                        <div className="main_section_by_video_production">
                            <div className="githup_page">
                                <p>Hi</p>
                                <p>I am saurabh</p>
                                <p>Welcome</p>
                                <p>You see source code of this website</p>
                                <h3>Click in open buuton </h3>
                                <p>Clone git repo and start you projects</p>
                                <a href="">frontend</a> <br /><a href="">Backend</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Production