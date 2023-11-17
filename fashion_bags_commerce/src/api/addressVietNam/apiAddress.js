import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss'

const AddressVietnam = () => {
    const host = "https://provinces.open-api.vn/api/";
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    useEffect(() => {
      axios.get(`${host}?depth=1`)
        .then(response => {
          setProvinces(response.data);
        })
        .catch(error => {
          console.error('Error fetching provinces:', error);
        });
    }, []);
  
    const handleProvinceChange = (event) => {
      const provinceCode = event.target.value;
      setSelectedProvince(provinceCode);
      setSelectedDistrict('');
      setSelectedWard('');
  
      axios.get(`${host}p/${provinceCode}?depth=2`)
        .then(response => {
          setDistricts(response.data.districts);
        })
        .catch(error => {
          console.error('Error fetching districts:', error);
        });
    };
  
    const handleDistrictChange = (event) => {
      const districtCode = event.target.value;
      setSelectedDistrict(districtCode);
      setSelectedWard('');
  
      axios.get(`${host}d/${districtCode}?depth=2`)
        .then(response => {
          setWards(response.data.wards);
        })
        .catch(error => {
          console.error('Error fetching wards:', error);
        });
    };
  
    const handleWardChange = (event) => {
      const wardCode = event.target.value;
      setSelectedWard(wardCode);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const address = `${selectedProvince} | ${selectedDistrict} | ${selectedWard}`;
      // Gửi thông tin người nhận hàng và địa chỉ đi đâu đó, ví dụ:
      console.log(`Người nhận: ${fullName}, Số điện thoại: ${phoneNumber}, Địa chỉ: ${address}`);
      // Hoặc có thể gửi thông tin này đến một API khác
    };
  

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Họ và tên"
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Số điện thoại"
          required
        />
        <select value={selectedProvince} onChange={handleProvinceChange}>
          <option disabled value="">
            Chọn Tỉnh/Thành phố
          </option>
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option disabled value="">
            Chọn Quận/Huyện
          </option>
          {districts.map((district) => (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          ))}
        </select>
        <select value={selectedWard} onChange={handleWardChange}>
          <option disabled value="">
            Chọn Phường/Xã
          </option>
          {wards.map((ward) => (
            <option key={ward.code} value={ward.code}>
              {ward.name}
            </option>
          ))}
        </select>
        <button type="submit">Giao đến địa chỉ này</button>
      </form>
    </div>
  );
};

export default AddressVietnam;
