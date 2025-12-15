"use client";

import { useState } from "react";
import Select from "./components/Select";

// Options list
const options = [
  { label: "India", value: "in", avatar: "https://flagcdn.com/24x18/in.png" },
  {
    label: "United States",
    value: "us",
    avatar: "https://flagcdn.com/24x18/us.png",
  },
  {
    label: "United Kingdom",
    value: "uk",
    avatar: "https://flagcdn.com/24x18/gb.png",
  },
  { label: "Canada", value: "ca", avatar: "https://flagcdn.com/24x18/ca.png" },
  {
    label: "Australia",
    value: "au",
    avatar: "https://flagcdn.com/24x18/au.png",
  },
  { label: "Germany", value: "de", avatar: "https://flagcdn.com/24x18/de.png" },
  { label: "France", value: "fr", avatar: "https://flagcdn.com/24x18/fr.png" },
  { label: "Italy", value: "it", avatar: "https://flagcdn.com/24x18/it.png" },
  { label: "Spain", value: "es", avatar: "https://flagcdn.com/24x18/es.png" },
  {
    label: "Netherlands",
    value: "nl",
    avatar: "https://flagcdn.com/24x18/nl.png",
  },
  { label: "Belgium", value: "be", avatar: "https://flagcdn.com/24x18/be.png" },
  {
    label: "Switzerland",
    value: "ch",
    avatar: "https://flagcdn.com/24x18/ch.png",
  },
  { label: "Sweden", value: "se", avatar: "https://flagcdn.com/24x18/se.png" },
  { label: "Norway", value: "no", avatar: "https://flagcdn.com/24x18/no.png" },
  { label: "Denmark", value: "dk", avatar: "https://flagcdn.com/24x18/dk.png" },
  { label: "Finland", value: "fi", avatar: "https://flagcdn.com/24x18/fi.png" },
  { label: "Ireland", value: "ie", avatar: "https://flagcdn.com/24x18/ie.png" },
  { label: "Austria", value: "at", avatar: "https://flagcdn.com/24x18/at.png" },
  {
    label: "Portugal",
    value: "pt",
    avatar: "https://flagcdn.com/24x18/pt.png",
  },
  { label: "Poland", value: "pl", avatar: "https://flagcdn.com/24x18/pl.png" },
  {
    label: "Czech Republic",
    value: "cz",
    avatar: "https://flagcdn.com/24x18/cz.png",
  },
  { label: "Hungary", value: "hu", avatar: "https://flagcdn.com/24x18/hu.png" },
  { label: "Romania", value: "ro", avatar: "https://flagcdn.com/24x18/ro.png" },
  { label: "Greece", value: "gr", avatar: "https://flagcdn.com/24x18/gr.png" },
  { label: "Turkey", value: "tr", avatar: "https://flagcdn.com/24x18/tr.png" },
  { label: "Russia", value: "ru", avatar: "https://flagcdn.com/24x18/ru.png" },
  { label: "Ukraine", value: "ua", avatar: "https://flagcdn.com/24x18/ua.png" },
  { label: "Japan", value: "jp", avatar: "https://flagcdn.com/24x18/jp.png" },
  {
    label: "South Korea",
    value: "kr",
    avatar: "https://flagcdn.com/24x18/kr.png",
  },
  { label: "China", value: "cn", avatar: "https://flagcdn.com/24x18/cn.png" },
  {
    label: "Singapore",
    value: "sg",
    avatar: "https://flagcdn.com/24x18/sg.png",
  },
  {
    label: "Malaysia",
    value: "my",
    avatar: "https://flagcdn.com/24x18/my.png",
  },
  {
    label: "Thailand",
    value: "th",
    avatar: "https://flagcdn.com/24x18/th.png",
  },
  {
    label: "Indonesia",
    value: "id",
    avatar: "https://flagcdn.com/24x18/id.png",
  },
  {
    label: "Philippines",
    value: "ph",
    avatar: "https://flagcdn.com/24x18/ph.png",
  },
  { label: "Vietnam", value: "vn", avatar: "https://flagcdn.com/24x18/vn.png" },
  { label: "Brazil", value: "br", avatar: "https://flagcdn.com/24x18/br.png" },
  {
    label: "Argentina",
    value: "ar",
    avatar: "https://flagcdn.com/24x18/ar.png",
  },
  { label: "Chile", value: "cl", avatar: "https://flagcdn.com/24x18/cl.png" },
  { label: "Mexico", value: "mx", avatar: "https://flagcdn.com/24x18/mx.png" },
];

export default function Page() {
  // Single Select state
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Multi Select state
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      {/* ================= SINGLE SELECT ================= */}
      <h3 style={{ marginBottom: "10px" }}>Single Select</h3>
      <Select
        options={options}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Select Country"
        showAvatar={false}
      />

      <hr style={{ margin: "30px 0" }} />

      {/* ================= MULTI SELECT ================= */}
      <h3 style={{ marginBottom: "10px" }}>Multi Select</h3>
      <Select
        options={options}
        isMulti
        value={selectedCountries}
        onChange={setSelectedCountries}
        placeholder="Select Countries"
        showAvatar={true}
      />
    </div>
  );
}
