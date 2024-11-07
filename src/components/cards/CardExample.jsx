import image from '../../assets/profile-pic1.png';
import { Card } from './card';


export const CardExample =() => {
    const handleProfile = () => {
        //goto Profile
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