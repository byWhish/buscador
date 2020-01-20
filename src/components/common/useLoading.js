import React, { useState, useCallback } from 'react';
import { PAGE_STATE } from '../../config';

import styles from './Loading.module.css';

const Loading = () => (
    <div className={styles.loading}>
        <div className={styles.ldsring}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

const LoadingWrapper = ({ status, children }) => {
    return (status === PAGE_STATE.DONE ? children : <Loading />)
}

const useLoading = (initialStatus) => {
    const [status, setStatus] = useState(initialStatus);

    const done = useCallback(() => {
        setStatus(PAGE_STATE.DONE);
    }, [])

    const loading = useCallback(() => {
        setStatus(PAGE_STATE.LOADING);
    }, [])

    const error = useCallback(() => {
        setStatus(PAGE_STATE.ERROR)
    }, [])

    return [status, done, loading, error];
}

export default LoadingWrapper;

export { useLoading };