import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipeByName } from "../../Redux/actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Estado local del componente para almacenar el valor del input de búsqueda
    this.state = {
      name: "",
    };
  }

  // Maneja el cambio en el input de búsqueda
  handleInputChange(event) {
    event.preventDefault();

    // Actualiza el estado local con el valor del input
    this.setState({ name: event.target.value });
  }

  // Maneja la acción de búsqueda
  handleSearch(event) {
    event.preventDefault();

    // Obtiene el valor del input de búsqueda desde el estado local
    const { name } = this.state;

    // Despacha la acción "getRecipeByName" pasando el nombre como argumento
    this.props.getRecipeByName(name);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Recipe..."
          onChange={(event) => this.handleInputChange(event)}
        />
        <button type="submit" onClick={(event) => this.handleSearch(event)}>
          Search
        </button>
      </div>
    );
  }
}

// Mapea los estados del store a props del componente (si es necesario)
const mapStateToProps = (state) => {
  return {};
};

// Mapea las acciones a props del componente
const mapDispatchToProps = (dispatch) => {
  return {
    // Mapea la acción "getRecipeByName" al prop "getRecipeByName"
    getRecipeByName: (name) => dispatch(getRecipeByName(name)),
  };
};

// Conecta el componente al store de Redux utilizando "connect"
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
