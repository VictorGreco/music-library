import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import FilterCard from '../FilterCard/FilterCard';
import Input from '../Input/Input';
import './AdditionalParams.css';
import axios from 'axios';

interface FilterCardProps {
    setState: Function;
    state: any;
}

function AdditionalParams({ setState, state }: FilterCardProps): JSX.Element {
    const [countries, setCountries] = useState([]);
    const updateState = (name: string, value: string | number): void => {
        const nameToState: any = {
            'country': {
                country: {
                    ...state?.country,
                    value: value
                }
            },
            'explicit content': {
                explicit_content: {
                    ...state?.explicit_content,
                    value: value
                }
            },
            'limit': {
                limit: {
                    ...state?.limit,
                    value: value
                }
            },
            default: state
        }

        setState(nameToState[name]);
    };

    const onChecked = (name: string, value: boolean): void => {
        const nameToState: any = {
            'country': {
                country: {
                    ...state?.country,
                    checked: value
                }
            },
            'explicit content': {
                explicit_content: {
                    ...state?.explicit_content,
                    checked: value
                }
            },
            'limit': {
                limit: {
                    ...state?.limit,
                    checked: value
                }
            },
            default: state
        }

        debugger;

        setState(nameToState[name]);
    }

    useEffect(() => {
        (async function () {
            const result = await axios.get('https://www.liferay.com/api/jsonws/country/get-countries/');

            setCountries(result.data);
        })();
    }, []);

    return (
        <div className="additionalParams">
            <div className="additionalParams_header">
                <div className="additionalParams_header_line"></div>
                <p className="additionalParams_header_title">ADDITIONAL PARAMETERS</p>
                <div className="additionalParams_header_line"></div>
            </div>
            <div className="additionalParams_filters">
                <FilterCard onUpdate={onChecked} title="Country">
                    <Dropdown onUpdate={updateState} name="country" countries={countries} />
                </FilterCard>
                <FilterCard onUpdate={onChecked} title="Explicit Content">
                    <Dropdown onUpdate={updateState} name="explicit content" options={['Yes', 'No']} />
                </FilterCard>
                <FilterCard onUpdate={onChecked} title="Limit">
                    <Input name="limit" onUpdate={updateState} type="number" min={1} max={200} placeholder="1..200" />
                </FilterCard>
            </div>
        </div>
    );
}

export default AdditionalParams;
