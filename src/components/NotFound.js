import React, { Fragment } from 'react'
import pageNotFound from '../assets/pageNotFound.jpg'

const NotFound = () => {
    return (
        <Fragment>
            <section className="pageNotFound">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page_img">
                                <img src={pageNotFound} alt="pageNotFound" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NotFound
