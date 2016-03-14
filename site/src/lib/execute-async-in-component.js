import setComponentState from "./set-component-state";

export default async function executeAsyncInComponent(
    component,
    asyncCall,
    // state keys
    {
        error   : errorKey = "error",
        progress: progressKey,
        result  : resultKey
    }
) {

    component.setState({
        [ progressKey ]: true
    });

    let result;

    try {
        result = await asyncCall();

        await setComponentState(component, {
            [ resultKey  ] : result,
            [ progressKey ]: false
        });
    }
    catch (error) {
        await setComponentState(component, {
            [ errorKey ]   : error,
            [ progressKey ]: false
        });

        throw error;
    }

    return result;
}
