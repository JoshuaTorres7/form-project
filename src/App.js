import React from 'react';

function App() {
    return (
        <div style={{ margin: "2rem", fontFamily: "Arial, sans-serif" }}>
            <h1>Form Project</h1>
            <form>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
