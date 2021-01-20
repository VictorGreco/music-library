import React from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown/Dropdown';
import FilterCard from '../FilterCard/FilterCard';
import './AdditionalParams.css';
import Input from '../Input/Input';

interface Props {
    callback: any
}

class AdditionalParams extends React.Component<Props> {

    state = {
        country: {
            checked: false,
            value: 'ES'
        },
        explicit_content: {
            checked: false,
            value: 'yes'
        },
        limit: {
            checked: false,
            value: '10'
        },
        countriesData: []
    }

    onSearchUpdate = (name: string, value: string): void => {
        switch (name.toLowerCase()) {
            case 'country':
                this.setState({
                    country: {
                        ...this.state.country,
                        value: value
                    }
                })
                break;

            case 'explicit content':
                this.setState({
                    explicit_content: {
                        ...this.state.explicit_content,
                        value: value.toLowerCase()
                    }
                })
                break;

            case 'limit':
                this.setState({
                    limit: {
                        ...this.state.limit,
                        value: value
                    }
                })
                break;

            default:
                break;
        }
    }

    onChecked = (name: string, value: string): void => {
        switch (name.toLowerCase()) {
            case 'country':
                this.setState({
                    country: {
                        ...this.state.country,
                        checked: value
                    }
                })
                break;

            case 'explicit content':
                this.setState({
                    explicit_content: {
                        ...this.state.explicit_content,
                        checked: value
                    }
                })
                break;

            case 'limit':
                this.setState({
                    limit: {
                        ...this.state.limit,
                        checked: value
                    }
                })
                break;

            default:
                break;
        }
    }

    componentDidMount() {
        (async () => {
            const result = await axios.get('https://www.liferay.com/api/jsonws/country/get-countries/');

            this.setState({countriesData: result.data});
        })();
    }

    componentDidUpdate() {
            this.props.callback(this.state)
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
                        <FilterCard onUpdate={this.onChecked} title="Country">
                            <Dropdown onUpdate={this.onSearchUpdate} name="country" options={this.state.countriesData} />
                        </FilterCard>
                        <FilterCard onUpdate={this.onChecked} title="Explicit Content">
                            <Dropdown onUpdate={this.onSearchUpdate} name="explicit content" options={['Yes', 'No']} />
                        </FilterCard>
                        <FilterCard onUpdate={this.onChecked} title="Limit">
                            <Input name="limit" onUpdate={this.onSearchUpdate} type="number" min={1} max={200} placeholder="1..200" />
                        </FilterCard>
                    </div>
                </div>
            )
        }
    }

    export default AdditionalParams
