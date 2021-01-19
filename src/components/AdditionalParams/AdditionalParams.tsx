import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import FilterCard from '../FilterCard/FilterCard';
import Input from '../Input/Input';
import './AdditionalParams.css';

interface FilterCardProps {
    callback: Function;
}

class AdditionalParams extends React.Component<FilterCardProps> {
    state = {
        country: {
            checked: false,
            value: 'spain'
        },
        explicit_content: {
            checked: false,
            value: 'yes'
        },
        limit: {
            checked: false,
            value: '10'
        }
    };

    updateState = (name: string, value: string | boolean): void => {
        const lowerCaseName: string = name.toLowerCase();
        const lowerCaseValue: string | boolean = typeof value === 'string' && value.toLowerCase();
        const nameToState: any = {
            'country': {
                country: {
                    ...this.state.country,
                    value: lowerCaseValue
                }
            },
            'explicit content': {
                explicit_content: {
                    ...this.state.explicit_content,
                    value: lowerCaseValue
                }
            },
            'limit': {
                limit: {
                    ...this.state.limit,
                    value: value
                }
            },
            default: this.state
        }

        this.setState(nameToState[lowerCaseName]);
    };

    componentDidUpdate() {
        this.props.callback(this.state);
    };

    render(): JSX.Element {
        return (
            <div className="additionalParams">
                <div className="additionalParams_header">
                    <div className="additionalParams_header_line"></div>
                    <p className="additionalParams_header_title">ADDITIONAL PARAMETERS</p>
                    <div className="additionalParams_header_line"></div>
                </div>
                <div className="additionalParams_filters">
                    <FilterCard onUpdate={this.updateState} title="Country">
                        <Dropdown onUpdate={this.updateState} name="country" options={['Spain', 'France', 'Italy']} />
                    </FilterCard>
                    <FilterCard onUpdate={this.updateState} title="Explicit Content">
                        <Dropdown onUpdate={this.updateState} name="explicit content" options={['Yes', 'No']} />
                    </FilterCard>
                    <FilterCard onUpdate={this.updateState} title="Limit">
                        <Input name="limit" onUpdate={this.updateState} type="number" min={1} max={200} placeholder="1..200" />
                    </FilterCard>
                </div>
            </div>
        );
    };
};

export default AdditionalParams
