import React from 'react';
import './AchievementCard.css';

function AchievementCard({ achieves }: Props) {
    const Fade: any = require('react-reveal/Fade');
    return(
        <Fade bottom duration={800}>
        <div className="achieve-card">
            <div className="achieve-card-title">
                <p>{achieves.title}</p>
            </div>
            <div className="achieve-card-desc">
                <p>{achieves.desc}</p>
            </div>
        </div>
        </Fade>
    );
}

interface Props {
    achieves: {
        title: string,
        desc: string
    }
}
export default AchievementCard;
