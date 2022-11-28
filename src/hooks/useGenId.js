

const useGenId = () => {

    const id = Math.random().toString(36).slice(2);

    return id;
}

export default useGenId;