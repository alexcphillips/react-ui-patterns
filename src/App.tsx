import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import DocsLayout from "./components/layout/DocsLayout";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DocsLayout />}>
                    <Route index element={<Introduction />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
