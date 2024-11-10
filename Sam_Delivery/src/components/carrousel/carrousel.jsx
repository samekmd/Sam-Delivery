import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false); // Novo estado para controlar a transição

    const handleNext = () => {
        setIsTransitioning(true); // Ativa a transição
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsTransitioning(false); // Desativa a transição após a mudança de imagem
        }, 1000); // Tempo que controla a duração da transição
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 1000);
    };

    // Efeito para transição automática
    useEffect(() => {
        const intervalId = setInterval(handleNext, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                maxWidth: 1000,
                height: 500,
                margin: 'auto',
                overflow: 'hidden',
                borderRadius: '10px',
            }}
        >
            <IconButton
                onClick={handlePrev}
                sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <ArrowBackIos />
            </IconButton>

            <Box
                component="img"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                sx={{
                    width: '100%',
                    height: 'auto',
                    opacity: isTransitioning ? 0 : 1, // Efeito de opacidade durante a transição
                    transform: isTransitioning ? 'scale(1.05)' : 'scale(1)', // Leve zoom durante a transição
                    transition: 'opacity 1.0s ease-in-out, transform 1.0s ease-in-out', // Tempo mais longo para transição
                }}
            />

            <IconButton
                onClick={handleNext}
                sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

export default Carousel;
