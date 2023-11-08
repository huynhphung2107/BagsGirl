import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

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

        // set 100 -> clear, set 300 -> submit
        //set 300 => submit
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            // const formValues = {
            //     srearchTerm: e.target.value.toString(),
            // };
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