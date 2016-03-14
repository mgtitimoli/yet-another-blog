export default function setComponentState(component, state) {

    return new Promise(resolve => {

        component.setState(
            state,
            resolve
        );
    });
}
