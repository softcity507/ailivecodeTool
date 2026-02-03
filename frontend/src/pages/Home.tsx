import React, { useState, useEffect } from 'react';
import { humanizeText, HumanizeOptions } from '../utils/humanizer';

const Humanizer: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [status, setStatus] = useState('Ready');
    const [wordCount, setWordCount] = useState(0);
    const [options, setOptions] = useState<HumanizeOptions>({
        tone: 'standard',
        level: 50,
        contractions: true,
        idioms: true,
        structure: true,
        imperfections: false
    });

    useEffect(() => {
        const count = input.trim() ? input.trim().split(/\s+/).length : 0;
        setWordCount(count);
    }, [input]);

    const handleHumanize = () => {
        if (!input.trim()) return;

        setStatus('Processing...');

        // Simulate processing delay
        setTimeout(() => {
            const result = humanizeText(input, options);
            setOutput(result);
            setStatus('Done');
        }, 600);
    };

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        const originalStatus = status;
        setStatus('✅ Copied!');
        setTimeout(() => setStatus(originalStatus), 2000);
    };

    const downloadOutput = () => {
        if (!output) return;
        const blob = new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'humanized-text.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    const getLevelLabel = (val: number) => {
        if (val < 30) return "Low (Subtle)";
        if (val > 70) return "High (Heavy)";
        return "Medium";
    };

    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem' }}>AI Humanizer</h1>
                <span className="subtitle">Transform robotic text into natural, human-sounding language.</span>
            </header>

            <div className="grid-layout">
                {/* Input Column */}
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <label htmlFor="input">Input Text</label>
                        <button
                            className="btn-ghost"
                            onClick={async () => {
                                const text = await navigator.clipboard.readText();
                                setInput(text);
                            }}
                            style={{ width: 'auto', padding: '0.25rem 0.75rem', margin: 0, fontSize: '0.8rem' }}
                        >
                            Paste
                        </button>
                    </div>
                    <textarea
                        id="input"
                        placeholder="Paste AI-generated text here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        <span>{wordCount} words</span>
                        <button
                            onClick={() => { setInput(''); setOutput(''); setStatus('Ready'); }}
                            style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', fontSize: '0.8rem' }}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Controls Column */}
                <div className="card" style={{ gap: '1.5rem' }}>
                    <div className="control-group">
                        <label htmlFor="tone">Tone & Style</label>
                        <select
                            id="tone"
                            value={options.tone}
                            onChange={(e) => setOptions({ ...options, tone: e.target.value })}
                        >
                            <option value="standard">Standard (Balanced)</option>
                            <option value="casual">Casual / Conversational</option>
                            <option value="professional">Professional / Formal</option>
                            <option value="academic">Academic / Complex</option>
                            <option value="creative">Creative / Expressive</option>
                        </select>
                    </div>

                    <div className="control-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label htmlFor="level">Humanization Level</label>
                            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                                {getLevelLabel(options.level)}
                            </span>
                        </div>
                        <input
                            id="level"
                            type="range"
                            min="1"
                            max="100"
                            value={options.level}
                            onChange={(e) => setOptions({ ...options, level: parseInt(e.target.value) })}
                        />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                            Higher levels add more variance, idioms, and imperfections.
                        </p>
                    </div>

                    <div className="control-group">
                        <label>Enhancements</label>
                        <div className="checkbox-group">
                            <label className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={options.contractions}
                                    onChange={(e) => setOptions({ ...options, contractions: e.target.checked })}
                                />
                                Use Contractions (e.g., "don't")
                            </label>
                            <label className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={options.idioms}
                                    onChange={(e) => setOptions({ ...options, idioms: e.target.checked })}
                                />
                                Insert Idioms & Metaphors
                            </label>
                            <label className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={options.structure}
                                    onChange={(e) => setOptions({ ...options, structure: e.target.checked })}
                                />
                                Vary Sentence Structure
                            </label>
                            <label className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={options.imperfections}
                                    onChange={(e) => setOptions({ ...options, imperfections: e.target.checked })}
                                />
                                Simulate Human Imperfections
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleHumanize}>
                        <span>✨ Humanize Text</span>
                    </button>
                </div>

                {/* Output Column */}
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <label>Humanized Result</label>
                        <span className="badge">{status}</span>
                    </div>
                    <div className="output-area">
                        {output ? output : <div className="placeholder-text">Result will appear here...</div>}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        <button className="btn btn-ghost" onClick={copyToClipboard}>📋 Copy</button>
                        <button className="btn btn-ghost" onClick={downloadOutput}>💾 Save .txt</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Humanizer;
