import React, {useEffect} from 'react';
import {Alert} from "./Alert";
import {useAppDispatch, useAppSelector} from "../hooks/useReduxHelpers";
import {alertFailure, alertStart, alertSuccess} from '../store/alerts';
import axios from 'axios';

export const Alerts = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(alertStart());
        axios
            .get('https://api.weather.gov/alerts')
            .then(res => dispatch(alertSuccess(res.data.features)))
            .catch(error => dispatch(alertFailure(error)));
    }, []);
    const {isLoading, alerts, errors} = useAppSelector(state => state.alerts);
    if (Boolean(errors)) {
        return (
            <>
                <h1>An Error Occurred</h1>
                <code>{errors}</code>
            </>
        )
    }
    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (<>{alerts.map((alert, key) => <Alert alert={alert} key={key}/>)}</>)
}
