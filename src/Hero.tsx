
export function Hero({name}: {name?: string}) {
    return (
        <div className="hero">
            <h1>Welcome {(name ?? '')} to Playground!</h1>
            <p>This is a simple React application setup using Vite.</p>
        </div>
    );
}