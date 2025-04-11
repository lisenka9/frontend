import styles from './App.module.scss';
import { useState, CSSProperties } from 'react';
import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {ArticleStateType, defaultArticleState} from 'src/constants/articleProps';

export const App = () => {
	const [styleArticle, setStyleArticle] =
		useState<ArticleStateType>(defaultArticleState); // Создаем состояние styleArticle, используя useState, с типом ArticleStateType и начальным значением defaultArticleState

	return (
		<main
			className={styles.main} // Применяем стили из SCSS-модуля к элементу main
			style={ 
				{
					'--font-family': styleArticle.fontFamilyOption.value, // Устанавливаем CSS-переменную --font-family из значения состояния
					'--font-size': styleArticle.fontSizeOption.value, // Устанавливаем CSS-переменную --font-size из значения состояния
					'--font-color': styleArticle.fontColor.value, // Устанавливаем CSS-переменную --font-color из значения состояния
					'--container-width': styleArticle.contentWidth.value, // Устанавливаем CSS-переменную --container-width из значения состояния
					'--bg-color': styleArticle.backgroundColor.value, // Устанавливаем CSS-переменную --bg-color из значения состояния
				} as CSSProperties // Указываем тип CSSProperties для объекта style 
				
			}> 

			<ArticleParamsForm onChange={setStyleArticle} />  { /*Рендерим компонент ArticleParamsForm и передаем функцию setStyleArticle в качестве пропса onChange*/}
			<Article/> {/*Рендерим компонент Article*/}
		</main>
	);
};