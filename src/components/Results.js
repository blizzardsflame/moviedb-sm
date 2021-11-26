import React from 'react';
import Result from './Result';
import { motion } from 'framer-motion';

function Results({ results, openPopup }) {
  return (
    <motion.section
      className="results"
      initial={{ opacity: 0.3, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    >
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </motion.section>
  );
}

export default Results;
