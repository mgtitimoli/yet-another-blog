import { createAction } from "redux-actions";

export default function createAsyncActionCreator(
    TYPE,
    executeAsync
) {

    const TYPE_STARTED = TYPE + "_STARTED";
    const TYPE_FAILED  = TYPE + "_FAILED";
    const TYPE_SUCCEED = TYPE + "_SUCCEED";

    let actionCreators = {
        [ TYPE_STARTED ]: createAction(TYPE_STARTED),
        [ TYPE_FAILED  ]: createAction(TYPE_FAILED),
        [ TYPE_SUCCEED ]: createAction(TYPE_SUCCEED)
    };

    function create(...args) {

        return async (dispatch, getState) => {

            let result;

            dispatch(actionCreators[TYPE_STARTED]());

            try {
                result = await executeAsync(...args, getState, dispatch);

                dispatch(actionCreators[TYPE_SUCCEED](result));
            }
            catch (error) {
                result = error;

                dispatch(actionCreators[TYPE_FAILED](error));
            }

            return result;
        };
    }

    Object.assign(create, {
        TYPE,
        TYPE_STARTED,
        TYPE_FAILED,
        TYPE_SUCCEED
    });

    return create;
}
