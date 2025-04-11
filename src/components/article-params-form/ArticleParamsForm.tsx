import { useState, useRef, SyntheticEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Spacing } from 'components/spacing';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Select } from 'components/select';
import { Text } from 'components/text';
import { useClose } from 'components/hooks/useClose';

import {fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr, OptionType, ArticleStateType, defaultArticleState} from 'src/constants/articleProps';

import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	onChange: React.Dispatch<React.SetStateAction<ArticleStateType>>; // Определяем тип пропса onChange: функция для обновления состояния ArticleStateType
};

export const ArticleParamsForm = ({ onChange }: ArticleParamsFormProps) => {
	const defaultStateForm = useRef<ArticleStateType>(defaultArticleState); // Создаем useRef для хранения начального состояния формы
	const asideRef = useRef<HTMLDivElement | null>(null); // Создаем useRef для ссылки на DOM-элемент aside

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Создаем состояние isMenuOpen для отслеживания открытия/закрытия меню

	const [fontFamily, setfontFamily] = useState<OptionType>(
		defaultStateForm.current.fontFamilyOption
	); // Создаем состояние fontFamily для выбранного шрифта
	const [fontSize, setfontSize] = useState<OptionType>(
		defaultStateForm.current.fontSizeOption
	); // Создаем состояние fontSize для выбранного размера шрифта
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultStateForm.current.backgroundColor
	); // Создаем состояние backgroundColor для выбранного цвета фона
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultStateForm.current.fontColor
	); // Создаем состояние fontColor для выбранного цвета шрифта
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultStateForm.current.contentWidth
	); // Создаем состояние contentWidth для выбранной ширины контента

	useClose({
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: asideRef,
	}); // Используем хук useClose для закрытия меню при клике вне его

	const toggleStateMenu = () => {
		setIsMenuOpen((prev) => !prev);
	}; // Функция для переключения состояния меню

	const changefontFamily = (option: OptionType) => {
		setfontFamily(option);
	}; // Функция для обновления состояния fontFamily
	const changeFontSize = (option: OptionType) => {
		setfontSize(option);
	}; // Функция для обновления состояния fontSize
	const changeBackgroundColor = (option: OptionType) => {
		setBackgroundColor(option);
	}; // Функция для обновления состояния backgroundColor
	const changeFontColor = (option: OptionType) => {
		setFontColor(option);
	}; // Функция для обновления состояния fontColor
	const changeContentWidth = (option: OptionType) => {
		setContentWidth(option);
	}; // Функция для обновления состояния contentWidth

	const handleOnSubmitForm = (e: SyntheticEvent) => {
		e.preventDefault();
		onChange({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
	}; // Функция для обработки отправки формы

	const handleOnClickButtonReset = () => {
		onChange(defaultStateForm.current);
		setfontFamily(defaultStateForm.current.fontFamilyOption);
		setfontSize(defaultStateForm.current.fontSizeOption);
		setBackgroundColor(defaultStateForm.current.backgroundColor);
		setFontColor(defaultStateForm.current.fontColor);
		setContentWidth(defaultStateForm.current.contentWidth);
	}; // Функция для обработки нажатия кнопки сброса

	return (
		<div ref={asideRef}> {/* Оборачиваем все элементы в div и присваиваем ссылку asideRef */}
			<ArrowButton onClick={toggleStateMenu} isMenuOpen={isMenuOpen} /> {/* Рендерим компонент ArrowButton, передавая функцию переключения меню и состояние открытия меню */}
			<aside
				className={clsx(styles.container, {  // Добавляем классы к aside, используя clsx для условного добавления класса открытия
					[styles.container_open]: isMenuOpen, // Добавляем класс styles.container_open, если isMenuOpen равно true
				})}>
				<form className={styles.form} onSubmit={handleOnSubmitForm}> {/* Оборачиваем элементы формы в тег form и привязываем обработчик отправки */}
					<Text as='h2' size={31} weight={800} uppercase> {/* Рендерим заголовок, используя компонент Text */}
						Задайте параметры
					</Text>
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<Select
						options={fontFamilyOptions} // Передаем список опций для выбора шрифта
						selected={fontFamily} // Передаем выбранный шрифт
						onChange={changefontFamily} // Передаем функцию для обработки изменения выбора шрифта
						title='шрифт' // Передаем заголовок для компонента Select
					/>
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<RadioGroup
						name='font-size' // Передаем имя для группы радиокнопок
						options={fontSizeOptions} // Передаем список опций для выбора размера шрифта
						selected={fontSize} // Передаем выбранный размер шрифта
						onChange={changeFontSize} // Передаем функцию для обработки изменения выбора размера шрифта
						title='размер шрифта' // Передаем заголовок для компонента RadioGroup
					/>
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<Select
						options={fontColors} // Передаем список опций для выбора цвета шрифта
						selected={fontColor} // Передаем выбранный цвет шрифта
						onChange={changeFontColor} // Передаем функцию для обработки изменения выбора цвета шрифта
						title='цвет шрифта' // Передаем заголовок для компонента Select
					/>
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<Separator /> {/* Рендерим компонент Separator для добавления разделителя */}
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<Select
						options={backgroundColors} // Передаем список опций для выбора цвета фона
						selected={backgroundColor} // Передаем выбранный цвет фона
						onChange={changeBackgroundColor} // Передаем функцию для обработки изменения выбора цвета фона
						title='цвет фона' // Передаем заголовок для компонента Select
					/>
					<Spacing size={50} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<Select
						options={contentWidthArr} // Передаем список опций для выбора ширины контента
						selected={contentWidth} // Передаем выбранную ширину контента
						onChange={changeContentWidth} // Передаем функцию для обработки изменения выбора ширины контента
						title='ширина контента' // Передаем заголовок для компонента Select
					/>
					<Spacing size={207} /> {/* Рендерим компонент Spacing для добавления отступа */}
					<div className={styles.bottomContainer}> {/* Оборачиваем кнопки в div для стилизации */}
						<Button
							title='Сбросить' // Передаем заголовок для кнопки
							type='reset' // Указываем тип кнопки как reset
							onClick={handleOnClickButtonReset} // Привязываем обработчик клика к кнопке сброса
						/>
						<Button title='Применить' type='submit' /> {/* Рендерим кнопку "Применить" с типом submit */}
					</div>
				</form>
			</aside>
		</div>
	);
};