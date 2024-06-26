import React, { useState, useRef, useEffect } from 'react';

const InputName = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const options = ['Sadanand Pai', 'Cool Dude 69', 'Manmit Tiwedi', 'Vidita Agrawal','Bhusan Patil','Nikil Jha','Aditya Suryawanshi','Krishna Kalanani','Ravi Kumar Panchal','Deepak Raj'];

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

   

    const handleOptionChange = (option) => {
        const newSelectedOptions = selectedOptions.includes(option)
          ? selectedOptions.filter((selectedOption) => selectedOption !== option)
          : [...selectedOptions, option];
        
        setSelectedOptions(newSelectedOptions);
        onSelectOwners(newSelectedOptions);
      };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className="container" ref={dropdownRef}>
            <input
                type="text"
                placeholder="Select options"
                readOnly
                value={selectedOptions.join(', ')}
                onClick={handleToggleDropdown}
            />
            {isDropdownOpen && (
                <div className="dropdown">
                    {options.map((option) => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleOptionChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputName ;