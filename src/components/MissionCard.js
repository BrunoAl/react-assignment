import React from 'react';
import PropTypes from 'prop-types';
import mapPinIcon from '../assets/mapPin.png';
import rocketIcon from '../assets/rocket.png';
import launchedRocket from '../assets/launchedRocket.png';

function LaunchesCard({ mission }) {
    const { links, mission_name: missionName, launch_year: launchYear, launch_site: launchSite, rocket } = mission;
    return (
        <div className="mission" key={missionName}>
            <img src={links.mission_patch_small} alt="House 1" className="mission__img" />

            <h5 className="mission__name">{missionName}</h5>

            <div className="mission__details">
                <div className="mission__cardDetailItem">
                    <img src={mapPinIcon} alt="map pin icon" />
                    <p>{launchSite.site_name}</p>
                </div>

                <div className="mission__cardDetailItem">
                    <img src={rocketIcon} alt="rocket icon" />
                    <p>{rocket.rocket_name}</p>
                </div>

                <div className="mission__cardDetailItem">
                    <img src={launchedRocket} alt="rocket icon" />
                    <p>{launchYear}</p>
                </div>
            </div>

            <button type="button" className="btn mission__btn">
                Detalhes
            </button>
        </div>
    );
}

LaunchesCard.propTypes = {
    mission: PropTypes.shape({
        launch_site: PropTypes.object.isRequired,
        launch_year: PropTypes.string.isRequired,
        links: PropTypes.object.isRequired,
        mission_name: PropTypes.string.isRequired,
        rocket: PropTypes.object.isRequired,
    }).isRequired,
};
export default LaunchesCard;
