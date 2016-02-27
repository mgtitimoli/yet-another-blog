export default function singletonProvider(createInstance) {

    let instance;

    return function getInstance() {

        if (!instance) {
            instance = createInstance();
        }

        return instance;
    };
}
