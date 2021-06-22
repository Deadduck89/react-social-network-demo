import React, {useState} from "react";
import styles from "./Paginator.module.css";

//Паджинатор для странички юзеров

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged, portionSize=10}) => {

    //Определяем количество страниц: делим общее количество юзеров
    //на количество, которое отображаем

    let pagesCount = Math.ceil( totalItemsCount / pageSize );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push( i );
    }

    //Определям количество цифр для перехода на нужные страницы
    //и правила отображения кнопок Вперед и Назад

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button className={styles.paginatorButton} onClick={() => {setPortionNumber(portionNumber-1)}
        }>Назад</button>}


        {pages
            .filter(page => page >= leftPortionNumber && page <=rightPortionNumber)
            .map( page => {
            return <span className={currentPage === page ? styles.selectedPage : styles.unselectedPage}
                         key={page}
                         onClick={(e) => {
                             onPageChanged( page );
                         }}>{page}  </span>
        } )}
        {portionCount > portionNumber && <button className={styles.paginatorButton} onClick={() => {setPortionNumber(portionNumber + 1)} }>Далее</button>}
    </div>
}


export default Paginator