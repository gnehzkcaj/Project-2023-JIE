import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';

export default function SocialMediaIcons() {
    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/pokemon';
    };

    const handleTwitterClick = () => {
        window.location.href = 'https://twitter.com/pokemon';
    };

    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/pokemon/';
    };

    const handlePinterestClick = () => {
        window.location.href = 'https://www.pinterest.com/pokemon/';
    };

    const handleYouTubeClick = () => {
        window.location.href = 'https://www.youtube.com/@pokemon/about';
    };

    return (
        <Box marginLeft={30} >
            <FacebookIcon
                color="primary"
                fontSize="large"
                onClick={handleFacebookClick}
                style={{ cursor: 'pointer' }}
            />
            <YouTubeIcon fontSize="large" sx={{ color: red[500] }} onClick={handleYouTubeClick} />
            <InstagramIcon color="primary" fontSize="large" onClick={handleInstagramClick} />
            <TwitterIcon sx={{ color: blue[300] }} fontSize="large" onClick={handleTwitterClick} />
            <PinterestIcon fontSize="large" sx={{ color: red[500] }} onClick={handlePinterestClick} />
        </Box>
    )
}
 
 