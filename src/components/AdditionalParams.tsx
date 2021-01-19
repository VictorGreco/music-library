import React from 'react';
import Dropdown from './Dropdown';
import FilterCard from './FilterCard';

class AdditionalParams extends React.Component {
    render(): JSX.Element {
        return (
            <div className="additionalParams">
                <div className="additionalParams_header">
                    <span className="additionalParams_header_line"></span>
                    <span className="additionalParams_header_title">ADDITIONAL PARAMETERS</span>
                    <span className="additionalParams_header_line"></span>
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
