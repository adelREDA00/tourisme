import React from 'react'



const Sform = () => {
  return (
    <form action="" className="hero-form">

                    <div className="input-wrapper">

                      <label htmlFor="search" className="input-label">Depart : *</label>

                      <input type="search" name="search" id="search" placeholder="Depart" required
                        className="input-field" />

        

                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="category" className="input-label">destination :</label>

                      <select name="category" id="category" className="dropdown-list">

                        <option value="house">Paris</option>
                        <option value="apartment">Marsielle</option>
                        <option value="offices">Nice</option>
                        <option value="townhome">Geneve</option>

                      </select>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="min-price" className="input-label">Min Prix  :</label>

                      <select name="min-price" id="min-price" className="dropdown-list">

                        <option value="min price">Min Prix </option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                        <option value="3000">3000</option>
                        <option value="4000">4000</option>
                        <option value="5000">5000</option>
                        <option value="6000">6000</option>

                      </select>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="max-price" className="input-label">Max Prix  :</label>

                      <select name="max-price" id="max-price" className="dropdown-list">

                        <option value="max price">Max Prix </option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                        <option value="3000">3000</option>
                        <option value="4000">4000</option>
                        <option value="5000">5000</option>
                        <option value="6000">6000</option>

                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Rechercher maintenant</button>

                  </form>
  )
}

export default Sform