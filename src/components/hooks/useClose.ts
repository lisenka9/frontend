import { useEffect } from 'react';

type TUseClose = {
	isOpen: boolean; // Тип пропса isOpen: флаг, указывающий, открыт ли элемент
	onClose: () => void; // Тип пропса onClose: функция для закрытия элемента
	rootRef: React.RefObject<HTMLElement>; // Тип пропса rootRef: ссылка на корневой DOM-элемент элемента
};

export function useClose({ isOpen, onClose, rootRef }: TUseClose) {
	useEffect(() => {
		if (!isOpen) return; // Если элемент не открыт, выходим из хука

		function handleClickOutside(event: MouseEvent) { // Функция для обработки клика вне элемента
			const { target } = event; // Получаем целевой элемент события
			const isOutsideClick =
				target instanceof Node && // Проверяем, является ли целевой элемент Node
				rootRef.current && // Проверяем, существует ли ссылка на корневой элемент
				!rootRef.current.contains(target); // Проверяем, находится ли целевой элемент внутри корневого элемента
			if (isOutsideClick) { // Если клик был вне элемента
				onClose(); // Закрываем элемент
			}
		}

		const handleEscape = (e: KeyboardEvent) => { // Функция для обработки нажатия клавиши Escape
			if (e.key === 'Escape') { // Если нажата клавиша Escape
				onClose(); // Закрываем элемент
			}
		};

		document.addEventListener('keydown', handleEscape); // Добавляем слушатель события нажатия клавиши Escape
		document.addEventListener('mousedown', handleClickOutside); // Добавляем слушатель события клика мышью
		return () => { // Функция, которая будет вызвана при размонтировании компонента или изменении зависимостей
			document.removeEventListener('keydown', handleEscape); // Удаляем слушатель события нажатия клавиши Escape
			document.removeEventListener('mousedown', handleClickOutside); // Удаляем слушатель события клика мышью
		};
	}, [isOpen, onClose, rootRef]); // Зависимости хука: isOpen, onClose, rootRef
}