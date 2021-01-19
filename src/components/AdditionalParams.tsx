import React from 'react';
import Dropdown from './Dropdown';
import FilterCard from './FilterCard';
import './AdditionalParams.css';

class AdditionalParams extends React.Component {
    render(): JSX.Element {
        return (
            <div className="additionalParams">
                <div className="additionalParams_header">
                    <div className="additionalParams_header_line"></div>
                    <p className="additionalParams_header_title">ADDITIONAL PARAMETERS</p>
                    <div className="additionalParams_header_line"></div>
                </div>
                <div className="additionalParams_filters">
                    <FilterCard title="Country">
                        <Dropdown options={['Spain', 'France', 'Italy']} />
                    </FilterCard>
                </div>
            </div>
        )
    }    
}

export default AdditionalParams
