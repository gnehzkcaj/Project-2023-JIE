import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Chip } from "@mui/material";
import { Box } from '@mui/system';
import { TYPE_COLORS } from "./Colors";
import './Slides.css';

export default function Slides({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];
  console.log(currentImage);

  const types = currentImage.type.split(' / '); 
  
  return (
    <div className="carousel">
      <Box marginBottom={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box>
        <Typography variant="h6">
            <span>Name: {currentImage.name}</span>
            <span style={{ marginLeft: 100 }}>ID: {currentImage.id}</span>
          </Typography>
        </Box>
        <Box>
        <Typography variant="body2" color="Secondary">
            <span>Type: </span>
            {types.map((type, index) => (
                    <Chip
                        key={index}
                        label={type}
                        size="small"
                        style={{
                            backgroundColor: `#${TYPE_COLORS[type.toLowerCase()]}`,
                            marginRight: '5px',
                        }}
                    />
                ))}
            <span style={{ marginLeft: 100 }}>Abilities:</span>
            <Chip label={currentImage.abilities} size="small" />
          </Typography>
        </Box>
      </Box>

      <div className="carousel-images">

        <AnimatePresence>
          <motion.img
            key={currentImage.id}
            src={currentImage.url}
            alt={currentImage.name}
            title={`Name: ${currentImage.name}, ID: ${currentImage.id}`}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>

        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};