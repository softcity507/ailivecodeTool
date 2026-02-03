const Documentation = () => {
    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem' }}>Documentation</h1>
                <span className="subtitle">Learn how to get the most out of our AI tools.</span>
            </header>
            <div className="card" style={{ maxWidth: '900px', margin: '0 auto', gap: '2rem' }}>
                <section>
                    <h3>1. Humanizer</h3>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        The Humanizer uses advanced NLP techniques to rewrite AI-generated text. It varies sentence structure,
                        adds natural synonyms, and can even insert common human imperfections to bypass strict filters.
                    </p>
                </section>
                <section>
                    <h3>2. Tone Settings</h3>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Choose from Standard, Casual, Professional, Academic, or Creative tones to match your specific context.
                    </p>
                </section>
                <section>
                    <h3>3. Security & Privacy</h3>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        All processing happens locally or via secure encrypted channels. We do not store your input text.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Documentation;
