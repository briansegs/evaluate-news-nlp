const postData = async (url = '', formatedData = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatedData),
    })
    try {
        const newData = await response.json();
        return newData
    }catch(error) {
        console.log('error', error);
    }
};

export { postData }