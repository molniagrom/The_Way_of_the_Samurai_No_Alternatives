import { createRoot } from 'react-dom/client'
import './index.css'
import {MainPage} from "./ui/MainPage.tsx";

createRoot(document.getElementById('root')!).render(
    <MainPage />
)
