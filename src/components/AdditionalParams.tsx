import React from 'react';
import Dropdown from './Dropdown';
import FilterCard from './FilterCard';
import './AdditionalParams.css';
import Input from './Input';

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
                    <FilterCard title="Explicit Content">
                        <Dropdown options={['Yes', 'No']} />
                    </FilterCard>
                    <FilterCard title="Limit">
                        <Input type="number" min={1} max={200} placeholder="1..200" />
                    </FilterCard>
                </div>
            </div>
        )
    }    
}

export default AdditionalParams
