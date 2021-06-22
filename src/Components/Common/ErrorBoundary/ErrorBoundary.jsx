import React from "react";

//Предохранитель, который отобразит сообщение об ошибке,
//если обернутые в него компоненты упадут

class ErrorBoundary extends React.Component {
    constructor(props) {
        super( props );
        this.state = {hasError: false};
    }

    static gedDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Что-то пошло не так, но обязательно починится.</h1>
                    <h3>Хм, а вы пробовали включить и выключить компьютер?</h3>
                </div>
            )
        }
        return this.props.children
    }
}
 export default ErrorBoundary;