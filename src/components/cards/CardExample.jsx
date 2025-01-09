import image from '../../assets/profile-pic1.png';
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';


export const CardExample = () => {
    const handleProfile = () => {
        //goto Profile

            const navigate = useNavigate();
            navigate('/profile');
    

    };

    const handleFollow = () => {
        // goto follow
    };

    return (
        <section >
            <Card
                image={image}
                title="Ashish Walia"
                subtitle="Full Stack Developer"
                description="Full Stack Developer skilled in building responsive web applications with expertise in JavaScript, React, Node.js, and MongoDB integration."
                onProfile={handleProfile}
                onFollow={handleFollow}
            />
        </section>
    )
}