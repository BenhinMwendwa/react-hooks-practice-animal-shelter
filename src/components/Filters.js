import React from "react";

function Filters(onChangeType, onFindPetsClick) {
  const handleChange = (event) => {
    onChangeType(event.target.value);
  };

  const handleClick = () => {
    onFindPetsClick();
  }
  
  function Pet({ pet, onAdoptPet }) {
    const handleAdopt = () => {
      onAdoptPet(pet.id);
    };
  
  function PetBrowser({ pets, onAdoptPet }) {
    return (
      <div className="pet-browser">
        {pets.map((pet) => (
          <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
        ))}
      </div>
    );
  }
 
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
      <button onClick={handleAdopt} ></button>
      <petBrowser/>
        <button className="ui secondary button" onClick={handleClick}>Find pets</button>
      </div>
    </div>
  );
}}

export default Filters;