/**
 * Main application component for the React Playground.
 * 
 * Serves as the root component that renders the application header and conditionally
 * displays a user profile component based on the `renderProfile` flag.
 * 
 * @component
 * @returns {JSX.Element} The main application interface with conditional profile rendering
 * 
 * @example
 * // Usage in index.tsx or main entry point
 * <App />
 * 
 * @remarks
 * - The `renderProfile` flag is currently set to `false`, so the Profile component won't be visible
 * - To display the Profile, change `renderProfile` to `true`
 * - The Profile component receives a user object with name and email properties
 */
import { Profile } from "./Profile";
import { Hero } from "./hero";

function renderProfile() {
    return true;
}

export default function App() {
    // Flag to control whether the Profile component should be rendered
    const renderProfileFlag = renderProfile();
    return (
        <div className="app">
            <h1>React Playground</h1>
            <p>Edit <code>App.tsx</code> and reload.</p>

            {renderProfileFlag && <Profile user={{name: "Parham", email: "parham@example.com"}} />}

            <Hero  />
        </div>
    );
}
