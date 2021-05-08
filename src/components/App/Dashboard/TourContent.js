import React from 'react';

const TourContent = (props) => {
    const { header, content } = props;
    return (
        <>
            <div className="helper-dec">
                <h2>{header}</h2>
                <p>{content}</p>
            </div>
            <div className="tour-content-footer">
                <button className="btn btn-link">Back</button>
                <div>
                    <button className="btn btn-secondary">Skip</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </>
    );
};

export default TourContent;