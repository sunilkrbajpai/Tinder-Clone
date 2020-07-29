import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="SwipeButtons">
            <IconButton className="btn_repeat">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btn_Close">
            <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btn_Star">
            <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btn_favorite">
            <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btn_flash">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
