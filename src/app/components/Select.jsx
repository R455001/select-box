"use client";

import React, { useState, useEffect, useRef } from "react";

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select option",
  isMulti = false,
  enableSearch = true,
  disabled = false,
  className = "",
  showAvatar = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const selectedValues = isMulti ? value || [] : value ? [value] : [];

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()) &&
      !selectedValues.some((v) => v.value === opt.value)
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (isMulti) {
      onChange([...selectedValues, option]);
    } else {
      onChange(option);
      setIsOpen(false);
    }
    setSearch("");
  };

  const handleRemove = (option) => {
    onChange(selectedValues.filter((v) => v.value !== option.value));
  };

  return (
    <div
      ref={dropdownRef}
      className={`pxs_custom_select ${className} ${disabled ? "disabled" : ""}`}
    >
      {/* Input Area */}
      <div
        className="pxs_search_select"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        {/* Multi selected chips */}
        {isMulti && selectedValues.length > 0 && (
          <ul className="pxs_multi_selected">
            {selectedValues.map((item) => (
              <li key={item.value}>
                {showAvatar && item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.label}
                    className="pxs_avatar"
                  />
                )}
                <span>{item.label}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Placeholder */}
        {isMulti && selectedValues.length === 0 && (
          <span className="placeholder">{placeholder}</span>
        )}

        {/* Single select */}
        {!isMulti && (
          <p className={!value ? "placeholder" : ""}>
            {showAvatar && value?.avatar && (
              <img
                src={value.avatar}
                alt={value.label}
                className="pxs_avatar"
              />
            )}
            <span>{value?.label || placeholder}</span>
          </p>
        )}

        <img src="/images/ddArrow.svg" alt="arrow" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="pxs_select_dropdown">
          {enableSearch && (
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pxs_search_input"
            />
          )}

          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li key={option.value} onClick={() => handleSelect(option)}>
                  {showAvatar && option.avatar && (
                    <img
                      src={option.avatar}
                      alt={option.label}
                      className="pxs_avatar"
                    />
                  )}
                  <span>{option.label}</span>
                </li>
              ))
            ) : (
              <li className="no-options">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
