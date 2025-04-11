import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/app/App';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement; // Получаем DOM-элемент с id 'root' и указываем его тип
const root = createRoot(domNode); // Создаем React Root, используя найденный DOM-элемент

root.render( // Рендерим React-приложение в DOM
	<StrictMode> {/* Включаем StrictMode для дополнительных проверок при разработке*/}
		<App /> {/*Рендерим корневой компонент App*/}
	</StrictMode>
);