import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskForm5() {
  return (
    <div className="text-center mb-4" >
      <div className="btn-group-lg rounded" role="group" aria-label="Basic example">       
        <NavLink className="btn btn-primary" to="/SektorAnalizi">Sektör Analizi</NavLink>
        <NavLink className="btn btn-primary" to="/OrganizeSanayi">Organize Sanayi </NavLink>
        <NavLink className="btn btn-primary" to="/SanayiNoktalari">Sanayi Noktaları</NavLink>
      </div>
    </div>
  );
}

export default TaskForm5