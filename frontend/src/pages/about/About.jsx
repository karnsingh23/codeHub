import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about-container">
            <section className="about-header">
                <h1>About कोडhub</h1>
                <p>Empowering developers with easy-to-access documentation and quizzes to boost learning.</p>
            </section>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p className='paraMission'>
                At CodeHub, our mission is to provide developers with comprehensive, up-to-date, and easy-to-follow documentation for a wide range of web technologies. We strive to make learning and development more accessible by curating resources that cater to all experience levels, from beginners to experts.Interactive Quizzes: Test your knowledge, track progress, and challenge yourself with our quizzes on topics ranging from web basics to advanced coding concepts.
                In-depth Tutorials: Step-by-step guides and examples that help developers get hands-on experience and solidify their understanding.
                Community-Driven Resources: Contributions from our passionate community members to share tips, tools, and troubleshooting solutions.
                Real-World Projects: Offering hands-on project tutorials that simulate real-world coding scenarios to help developers build practical skills.
                Our goal is to empower developers to learn at their own pace and foster an inclusive environment where learning never stops. By providing high-quality content and a collaborative space, we hope to fuel innovation, creativity, and growth within the developer community.
                We believe that learning to code should be engaging, enjoyable, and effective — and CodeHub is here to make that happen!
                </p>
            </section>

            <section className="about-section">
                <h2>Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src="https://avatars.githubusercontent.com/u/164805722?v=4" alt="Team member 1" />
                        <h3>NTQ</h3>
                        <p>Developer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://avatars.githubusercontent.com/u/123285496?v=4" alt="Team member 2" />
                        <h3>Karan Singh</h3>
                        <p>Developer</p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default About;
