import React, { useState } from 'react';
import './profile.css'; 
import { Button, Modal, TextField } from '@mui/material';

const Profile = () => {
  // Estado del componente
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState(null); 
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState(''); 
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    publicationDate: '',
    genre: '',
    description: '',
  });
  const [tempUserName, setTempUserName] = useState(''); 
  const handleSearch = () => {
    
  };

  const openModal = (actionType) => {
    setAction(actionType);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setAction(null);
  };

  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleEditProfile = () => {
    setTempUserName(userName); // Inicializa el nombre temporal con el nombre actual
    openModal('editProfile');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    setBooks((prevBooks) => [...prevBooks, { ...newBook, id: Date.now() }]);
    setNewBook({
      title: '',
      author: '',
      publicationDate: '',
      genre: '',
      description: '',
    });
    closeModal();
  };

  // Función para simular el inicio de sesión
  const handleLogin = (name) => {
    setUserName(name); 
  };

  // Función para manejar la actualización del nombre de usuario en el perfil
  const handleSaveProfile = () => {
    handleLogin(tempUserName); 
    closeModal();
  };

  return (
    <div className="profile-page">
      <div className="top-bar">
        <div className="search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Buscar Libros"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
              <span className="fas fa-search" aria-hidden="true"></span>
              Buscar
            </button>
          </div>
        </div>
        <button className="form-button" onClick={() => openModal('addBook')}>
          Añadir Libro
        </button>
      </div>

      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-photo">
            <img src={profileImage || 'default-profile.png'} alt="Profile" />
          </div>
          <h2>{userName}</h2>
          <button className="form-button-edit" onClick={handleEditProfile}>
            Editar Perfil
          </button>
        </div>

        <div className="profile-info">
          <h2>Tablero De Biblioteca</h2>
          <div className="books-list">
            {books.length > 0 ? (
              books.map((book) => (
                <div className="book-card" key={book.id}>
                  <p>{book.title}</p>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert(`Prestar libro con ID: ${book.id}`)}
                  >
                    Prestar Libro
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id))
                    }
                  >
                    Remover Libro
                  </Button>
                </div>
              ))
            ) : (
              <p>No hay libros para mostrar</p>
            )}
          </div>
        </div>
      </div>

      <Modal open={modalOpen} onClose={closeModal}>
        <div className="modal-content">
          {action === 'editProfile' ? (
            <div className="modal-edit-profile">
              <h2>Editar Perfil</h2>
              <TextField
                label="Nombre de Usuario"
                value={tempUserName}
                onChange={(e) => setTempUserName(e.target.value)}
                fullWidth
                style={{ marginBottom: '10px' }}
              />
              <input
                type="file"
                accept="image/jpeg"
                onChange={handleImageUpload}
                style={{ marginBottom: '10px' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveProfile}
                style={{ marginTop: '10px' }}
              >
                Guardar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={closeModal}
                style={{ marginTop: '10px' }}
              >
                Cerrar
              </Button>
            </div>
          ) : action === 'addBook' ? (
            <div className="modal-add-book">
              <h2>Añadir Libro</h2>
              <input
                type="text"
                name="title"
                placeholder="Título"
                value={newBook.title}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
              />
              <input
                type="text"
                name="author"
                placeholder="Autor"
                value={newBook.author}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
              />
              <input
                type="date"
                name="publicationDate"
                placeholder="Fecha de Publicación"
                value={newBook.publicationDate}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
              />
              <select
                name="genre"
                value={newBook.genre}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
              >
                <option value="">Selecciona Género</option>
                <option value="fiction">Ficción</option>
                <option value="nonfiction">No Ficción</option>
                <option value="mystery">Misterio</option>
                <option value="fantasy">Fantasía</option>
                {/* Añadir más opciones según sea necesario */}
              </select>
              <textarea
                name="description"
                placeholder="Descripción"
                value={newBook.description}
                onChange={handleInputChange}
                rows="4"
                style={{ marginBottom: '10px' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddBook}
                style={{ marginTop: '10px' }}
              >
                Añadir Libro
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={closeModal}
                style={{ marginTop: '10px' }}
              >
                Cerrar
              </Button>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
