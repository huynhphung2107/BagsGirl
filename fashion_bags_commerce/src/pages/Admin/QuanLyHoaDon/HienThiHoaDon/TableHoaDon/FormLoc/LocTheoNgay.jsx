import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Form } from 'react-router-dom';
import { Button, Col, DatePicker, Row, Select } from 'antd';

Loc.propTypes = {
    onSubmit: PropTypes.func,
};

Loc.defaultProps = {
    onSubmit: null,
};

function Loc(props) {
    const { onSubmit } = props;
    const [ngayBatDau, setNgayBatDau] = useState();
    const [ngayKetThuc, setNgayKetThuc] = useState();
    const [maHoaDon, setMaHoaDon] = useState();

    function handleNgayBatDau(e) {
        setNgayBatDau(e.target.value.toString());
    }
    function handleNgayKetThuc(e) {
        setNgayKetThuc(e.target.value.toString());
    }
    const handleChange = (e) => {
        setMaHoaDon(e.value.toString());
    };
    function onClick(e) {
        console.log(ngayBatDau);
        console.log(ngayKetThuc);
        console.log(maHoaDon);

    }


    return (
        <div>
            <label className={styles.title}>Lọc hóa đơn theo: </label>
            <Row>
                <Col span={6}>
                    <label className={styles.label}>Ngày bắt đầu: </label>
                    <input className={styles.searchInput}
                        type="date"
                        placeholder="Ngày bắt đầu"
                        onChange={handleNgayBatDau}
                        value={ngayBatDau}
                    ></input>
                </Col>
                <Col span={6}><label className={styles.label}>Ngày kết thúc: </label>
                    <input className={styles.searchInput}
                        type="date"
                        placeholder="Ngày kết thúc"
                        onChange={handleNgayKetThuc}
                        value={ngayKetThuc}
                    ></input></Col>
                <Col span={6}><label className={styles.label}>Nhân viên: </label>
                    <Select
                        labelInValue
                        defaultValue={{ value: '', label: 'Tất cả' }}
                        style={{ width: 150 }}
                        placeholder="Vui lòng chọn nhân viên"
                        onChange={handleChange}
                        options={[
                            {
                                value: '',
                                label: 'Tất cả',
                            },
                            {
                                value: 'giam online',
                                label: 'Nguyễn Quân',
                            },
                        ]}
                    /></Col>
                <Col span={6}><button className={styles.button} onClick={onClick}>Lọc hóa đơn</button></Col>
            </Row>




        </div>
    );
}

export default Loc;