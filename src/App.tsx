import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Counter />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
