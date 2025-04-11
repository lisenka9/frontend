import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */

type ArrowButtonProps = {
	isMenuOpen: boolean; // Проп, определяющий, открыто ли меню
	onClick: () => void; // Проп, функция-обработчик клика
};

export const ArrowButton = ({ isMenuOpen, onClick }: ArrowButtonProps) => {
	return (
		/* Не забываем укаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick} // Привязываем функцию onClick к событию клика
			role='button' // Указываем роль "button" для доступности
			aria-label='Открыть/Закрыть форму параметров статьи' // Указываем aria-label для доступности
			tabIndex={0} // Указываем tabIndex для возможности навигации с клавиатуры
			className={clsx(styles.container, { // Добавляем классы с использованием clsx
				[styles.container_open]: isMenuOpen, // Добавляем класс styles.container_open, если isMenuOpen равно true
			})}>
			<img
				src={arrow} // Указываем источник изображения
				alt='иконка стрелочки' // Указываем alt текст для изображения
				className={clsx(styles.arrow, { // Добавляем классы с использованием clsx
					[styles.arrow_open]: isMenuOpen, // Добавляем класс styles.arrow_open, если isMenuOpen равно true
				})}
			/>
		</div>
	);
};