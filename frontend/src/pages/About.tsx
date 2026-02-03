const About = () => {
    return (
        <div style={{ marginTop: '5rem' }}>
            <h1>About Us</h1>
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.1rem', textAlign: 'left', lineHeight: '1.8' }}>
                    We are dedicated to building the future of software development. Our mission is to democratize
                    coding by providing intelligent tools that empower creators to build amazing things faster
                    and more efficiently than ever before.
                </p>
                <p style={{ fontSize: '1.1rem', textAlign: 'left', lineHeight: '1.8', marginTop: '1rem' }}>
                    Founded in 2026, we have been at the forefront of the AI coding revolution,
                    constantly pushing the boundaries of what's possible with large language models
                    and integrated development environments.
                </p>
            </div>
        </div>
    );
};

export default About;
