import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import FilterCard from '../FilterCard/FilterCard';
import Input from '../Input/Input';
import './AdditionalParams.css';

interface FilterCardProps {
    setState: Function;
    state: any;
}

function AdditionalParams({ setState, state }: FilterCardProps): JSX.Element {
    const updateState = (name: string, value: string | boolean): void => {
        const lowerCaseName: string = name.toLowerCase();
        const lowerCaseValue: string | boolean = typeof value === 'string' && value.toLowerCase();
        const nameToState: any = {
            'country': {
                country: {
                    ...state.country,
                    value: lowerCaseValue
                }
            },
            'explicit content': {
                explicit_content: {
                    ...state.explicit_content,
                    value: lowerCaseValue
                }
            },
            'limit': {
                limit: {
                    ...state.limit,
                    value: value
                }
            },
            default: state
        }

        setState(nameToState[lowerCaseName]);
    };

    return (
        <div className="additionalParams">
            <div className="additionalParams_header">
                <div className="additionalParams_header_line"></div>
                <p className="additionalParams_header_title">ADDITIONAL PARAMETERS</p>
                <div className="additionalParams_header_line"></div>
            </div>
            <div className="additionalParams_filters">
                <FilterCard onUpdate={updateState} title="Country">
                    <Dropdown onUpdate={updateState} name="country" options={['Spain', 'France', 'Italy']} />
                </FilterCard>
                <FilterCard onUpdate={updateState} title="Explicit Content">
                    <Dropdown onUpdate={updateState} name="explicit content" options={['Yes', 'No']} />
                </FilterCard>
                <FilterCard onUpdate={updateState} title="Limit">
                    <Input name="limit" onUpdate={updateState} type="number" min={1} max={200} placeholder="1..200" />
                </FilterCard>
            </div>
        </div>
    );
}

export default AdditionalParams;
