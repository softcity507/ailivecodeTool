const Services = () => {
    return (
        <div style={{ marginTop: '5rem' }}>
            <h1>Our Services</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="card">
                    <h2 style={{ color: '#38bdf8' }}>Code Generation</h2>
                    <p>Generate high-quality code snippets or entire functions using AI.</p>
                </div>
                <div className="card">
                    <h2 style={{ color: '#818cf8' }}>Security Audit</h2>
                    <p>Automatically detect and fix security vulnerabilities in your codebase.</p>
                </div>
                <div className="card">
                    <h2 style={{ color: '#c084fc' }}>Performance Optimization</h2>
                    <p>Optimize your application for speed and efficiency with AI guidance.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
