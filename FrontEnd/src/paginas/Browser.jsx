import React, { useState } from 'react';

// Ejemplo de datos
const items = [
  'Paulo Coelho',
  'El coronel no tiene quien le escriba',
  'La vaca púrpura',
];

function Browser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterItems(value);
  };

  const filterItems = (term) => {
    if (term === '') {
      setFilteredItems(items);
    } else {
      const lowercasedTerm = term.toLowerCase();
      const filtered = items.filter(item =>
        item.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="browser-container">
      <h2>Buscar</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}

export default Browser;
