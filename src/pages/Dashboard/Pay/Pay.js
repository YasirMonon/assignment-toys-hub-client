import React from 'react';
import classes from "../../NotFound/NotFound.module.css";
import './Pay.css'
import Construction from '../../../images/under-construction.gif'

const Pay = () => {
    return (
        <section className={classes.notFound}>
            <div className="text-center">
                <h3 style={{ color: "#ffffff" }}>PAGE IS UNDER CONSTRUCTION , WE'LL BE AVAILABLE SOON</h3>
                <img
                    className={classes.notFoundImg}
                    src={Construction}
                    alt="Under Construction"
                />
            </div>
        </section>
    );
};

export default Pay;