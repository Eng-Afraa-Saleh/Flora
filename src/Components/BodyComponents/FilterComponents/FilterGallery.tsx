import React, { useState } from "react";
import FilterCard from "./FilterCard/FilterCard";
import { motion } from 'framer-motion';
import '/src/Css/BodyCss/FilterCss/filtergallery.css';
import { properties, type CategoryProperty } from "../../../Data/BodyData/FilterSectionData/FilterCardsData";



const FilterGallery: React.FC = () =>{

    const [selectedType, setSelectedType] = useState<CategoryProperty| 'Residential'>('Residential');
    const filteredProperties = selectedType === 'Residential'? properties : properties.filter(p => p.category === selectedType);

    return(
        <section className="container filter-section">

              <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className='title-section'>Best Real Estate Deals</h2>
            <p className='title-section-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="filter-buttons">
                {
                    [
                        "Residential",
                        "Commercial",
                        "Agriculture",
                        "Industrial",
                        
                        ].map(category=> (
                        <button
                            key={category}
                            className={`filter-btn ${selectedType=== category? "active" : ""}`}
                            onClick={()=> setSelectedType(category as CategoryProperty | "Residential")}
                            >
                                {category} property
                        </button>
                    ))
                }
            </div>

          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="cards-container">
                {filteredProperties.map(property => (
                <FilterCard
                    key={property.id}
                    img={property.img}
                    details={property.details}
                    details2={property.details2}
                />
        ))}
            </div>

          </motion.div>

        </section>

    );
};

export default FilterGallery;