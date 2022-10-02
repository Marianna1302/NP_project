import React from "react";
import {
Link,
Route,
Routes
} from "react-router-dom";
import TTN from '../Pages/TTN';
import Office from '../Pages/Office';
import './style.css'


function Menu() {
  return (
    <div>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">TTN</Link>
            </li>
            <li>
              <Link to="/about">Office</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<Office />} />
          <Route path="/" element={<TTN />} />
        </Routes>
      </div>
    </div>
  );
}
export default Menu;