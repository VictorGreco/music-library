import React from 'react';
import Dropdown from './Dropdown';
import FilterCard from './FilterCard';
import './AdditionalParams.css';
import Input from './Input';

class AdditionalParams extends React.Component {

    onSearchUpdate = (name: string, value: string): void => {
        console.log(name, value)
    }

    render(): JSX.Element {
        return (
            <div className="additionalParams">
                <div className="additionalParams_header">
                    <div className="additionalParams_header_line"></div>
                    <p className="additionalParams_header_title">ADDITIONAL PARAMETERS</p>
                    <div className="additionalParams_header_line"></div>
                </div>
                <div className="additionalParams_filters">
                    <FilterCard onUpdate={this.onSearchUpdate} title="Country">
                        <Dropdown onUpdate={this.onSearchUpdate} name="country" options={['Spain', 'France', 'Italy']} />
                    </FilterCard>
                    <FilterCard onUpdate={this.onSearchUpdate} title="Explicit Content">
                        <Dropdown onUpdate={this.onSearchUpdate} name="explicit content" options={['Yes', 'No']} />
                    </FilterCard>
                    <FilterCard onUpdate={this.onSearchUpdate} title="Limit">
                        <Input name="limit" onUpdate={this.onSearchUpdate} type="number" min={1} max={200} placeholder="1..200" />
                    </FilterCard>
                </div>
            </div>
        )
    }    
}

export default AdditionalParams
