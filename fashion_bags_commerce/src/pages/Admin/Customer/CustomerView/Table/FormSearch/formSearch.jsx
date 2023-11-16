import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './formSearch.module.scss';

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};

SearchForm.defaultProps = {
    onSubmit: null,
};

function SearchForm(props) {
    const { onSubmit } = props;
    const [srearchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value.toString());
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {

            onSubmit(e.target.value.toString());
        }, 500);

    }

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.searchIinput}
                type="text"
                placeholder="Tìm kiếm"
                value={srearchTerm}
                onChange={handleSearchTermChange}
            ></input>
        </div>
    );
}

export default SearchForm;